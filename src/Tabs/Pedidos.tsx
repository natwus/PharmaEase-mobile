import { VStack, Divider, ScrollView, useToast, Box, Button, Text, Center } from 'native-base';
import { CardConsulta } from '../componentes/CardRemédio';
import { Titulo } from '../componentes/titulo';
import { useEffect, useState } from 'react';
import { NavigationProps } from '../@types/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { pegarConsultasPaciente } from '../servicos/PacienteServico';
import { cancelarConsulta } from '../servicos/ConsultaServico';
import { useIsFocused } from '@react-navigation/native';

interface Especialista {
  nome: string;
  imagem: string;
  especialidade: string;
  id: string;
}

interface Consulta {
  id: string;
  data: string;
  especialista: Especialista;
}

export default function Pedidos({ navigation }: NavigationProps<'Pedidos'>) {
  const [consultasProximas, setConsultasProximas] = useState<Consulta[]>([]);
  const [consultasPassadas, setConsultasPassadas] = useState<Consulta[]>([]);
  const [recarregar, setRecarregar] = useState(false);
  const isFocused = useIsFocused();
  const toast = useToast();

  useEffect(() => {
    async function pegarConsultas() {
      const pacienteId = await AsyncStorage.getItem('pacienteId');
      if (!pacienteId) return;

      const todasConsultas: Consulta[] = await pegarConsultasPaciente(pacienteId);
      const agora = new Date();

      const proximas = todasConsultas.filter((consulta) => new Date(consulta.data) > agora);
      const passadas = todasConsultas.filter((consulta) => new Date(consulta.data) <= agora);

      setConsultasProximas(proximas);
      setConsultasPassadas(passadas);
    }
    pegarConsultas()
  }, [isFocused, recarregar]);

  async function cancelarConsultas(consultaId: string) {
    const resultado = await cancelarConsulta(consultaId);
    if (resultado) {
      toast.show({
        title: "Pedido cancelado com sucesso!",
        description: "Pedido cancelado",
        backgroundColor: "green.500"
      });
      setRecarregar(!recarregar);
    } else {
      toast.show({
        title: 'Não foi possível cancelar o Pedido',
        description: "Não foi possível cancelar o Pedido",
        backgroundColor: "red.500"
      });
    }
  }

  return (
    <ScrollView flex={1} bgColor="#f0f0f0">
      <Center flex={1} py={10} bgColor="#f0f0f0">
        <VStack w="90%" borderRadius="xl" p={8} shadow="5" bgColor="white" space={5}>
          <Titulo color="red.500" fontSize="2xl" mb={5}>
            Meus Pedidos
          </Titulo>
          <Button
            onPress={() => navigation.navigate('Explorar')}
            mt={5}
            mb={5}
            backgroundColor="red.500"
            _text={{ color: "white" }}
            borderRadius="md"
            _hover={{ backgroundColor: "red.600" }}
            _pressed={{ backgroundColor: "red.700" }}
            shadow="3"
          >
            Fazer novo pedido
          </Button>

          <Box>
            <Titulo color="red.500" fontSize="lg" mb={2} alignSelf="flex-start">
              Pedidos à caminho
            </Titulo>
            {consultasProximas.length > 0 ? consultasProximas.map((consulta) =>
              <Box key={consulta.id} borderRadius="lg" p={4} mb={4}>
                <CardConsulta
                  nome={consulta.especialista.nome}
                  especialidade={consulta.especialista.especialidade}
                  foto={consulta.especialista.imagem}
                  foiPedido
                  onPress={() => cancelarConsultas(consulta.id)}
                />
              </Box>
            ) : (
              <Text color="gray.500" alignSelf="center" mt={5} fontSize="md">
                Nenhum pedido à caminho.
              </Text>
            )}
          </Box>

          <Divider mt={5} bg="gray.300" />

          <Box mt={5}>
            <Titulo color="red.500" fontSize="lg" mb={2} alignSelf="flex-start">
              Pedidos entregues
            </Titulo>
            {consultasPassadas.length > 0 ? consultasPassadas.map((consulta) =>
              <Box key={consulta.id} borderRadius="lg" p={4} mb={4} bg="white" shadow="2" borderColor="gray.200" borderWidth={1}>
                <CardConsulta
                  nome={consulta.especialista.nome}
                  especialidade={consulta.especialista.especialidade}
                  foto={consulta.especialista.imagem}
                  foiRecebido
                  onPress={() => navigation.navigate('Agendamento', { especialistaId: consulta.especialista.id })}
                />
              </Box>
            ) : (
              <Text color="gray.500" alignSelf="center" mt={5} fontSize="md">
                Nenhum pedido entregue.
              </Text>
            )}
          </Box>
        </VStack>
      </Center>
    </ScrollView>
  );
}