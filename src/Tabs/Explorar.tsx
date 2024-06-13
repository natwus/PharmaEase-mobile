import { VStack, Box, ScrollView, Input, Button, Text, Center } from "native-base";
import { CardConsulta } from "../componentes/CardRemédio";
import { buscarEspecialistaPorEstado } from "../servicos/EspecialistaServico";
import { useState } from "react";
import { Botao } from "../componentes/Botao";

interface Especialista {
  nome: string,
  imagem: string,
  especialidade: string,
  id: string,
}

export default function Explorar({ navigation }) {
  const [estado, setEstado] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [resultadoBusca, setResultadoBuscar] = useState([]);

  async function buscar() {
    if (!estado || !especialidade) return null;
    const resultado = await buscarEspecialistaPorEstado(estado, especialidade);
    if (resultado) {
      setResultadoBuscar(resultado);
      console.log(resultado);
    }
  }

  return (
    <ScrollView flex={1} bgColor="#f0f0f0">
      <Center flex={1} py={10}>
        <VStack w="90%" borderRadius="xl" p={8} shadow="5" bgColor="white" space={5}>
          <Box w="100%" borderRadius="xl" p={5}  bg={{
              linearGradient: {
                colors: ["black", "gray.800"],
                start: [0, 0],
                end: [1, 0],
              },
            }}>
            <Input
              placeholder="Digite a categoria do remédio"
              value={especialidade}
              onChangeText={setEspecialidade}
              borderColor="gray.300"
              bgColor="white"
              color="black"
              mb={4}
              borderRadius="md"
              px={4}
              py={3}
              _hover={{ borderColor: "gray.400" }}
              _focus={{ borderColor: "red.500" }}
              shadow="2"
            />
            <Input
              placeholder="Digite o tipo de remédio"
              value={estado}
              onChangeText={setEstado}
              borderColor="gray.300"
              bgColor="white"
              color="black"
              mb={4}
              borderRadius="md"
              px={4}
              py={3}
              _hover={{ borderColor: "gray.400" }}
              _focus={{ borderColor: "red.500" }}
              shadow="2"
            />
            <Botao
                mt={4} 
                backgroundColor="red.500"
                _text={{ color: "white" }}
                onPress={buscar}
                borderRadius="md"
                _hover={{ backgroundColor: "red.600" }}
                _pressed={{ backgroundColor: "red.700" }}
                shadow="3"
            >
              Buscar
            </Botao>
          </Box>

          <Text color="red.500" alignSelf="center" mt={5} fontSize="2xl" bold>
            Resultado da Busca
          </Text>
          {resultadoBusca?.length > 0 ? resultadoBusca.map((especialista: Especialista, index) => (
            <VStack flex={1} w="100%" alignItems="flex-start"  key={index} p={4} mb={4}>
              <CardConsulta
                especialidade={especialista.especialidade}
                foto={especialista.imagem}
                nome={especialista.nome}
                onPress={() => navigation.navigate('Agendamento', { especialistaId: especialista.id })}
              />
            </VStack>
          )) : (
            <Text color="gray.500" alignSelf="center" mt={5} fontSize="md">
              Nenhum resultado encontrado.
            </Text>
          )}
        </VStack>
      </Center>
    </ScrollView>
  );
}