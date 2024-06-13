import { VStack, Text, ScrollView, Avatar, Divider, Box } from 'native-base'
import { Titulo } from '../componentes/titulo'
import { pegarDadosPaciente } from '../servicos/PacienteServico'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Paciente } from '../interfaces/Paciente';
import { Botao } from '../componentes/Botao';

export default function Perfil({ navigation }) {
  const [dadosPaciente, setDadosPaciente] = useState({} as Paciente);

  useEffect(() => {
    async function dadosPaciente() {
      const pacienteId = await AsyncStorage.getItem('pacienteId');
      if (!pacienteId) return null;

      const resultado = await pegarDadosPaciente(pacienteId);
      if (resultado) {
        setDadosPaciente(resultado);
      }
    }
    dadosPaciente();
  })

  function deslogar() {
    AsyncStorage.removeItem('token');
    AsyncStorage.removeItem('pacienteId');
    navigation.replace('Login');
  }

  return (
    <ScrollView flex={1}>
      <VStack flex={1} alignItems="center">
        <Box backgroundColor="#1C1C1C" m="auto" alignItems="center" w="100%" paddingBottom="5">
          <Titulo color="red.500">Meu Perfil</Titulo>
          <Avatar size="175" borderColor="#fff" borderWidth="5" source={{ uri: dadosPaciente?.imagem }} mt={5} />
          <Titulo fontSize="xl" mb={1} color="#fff">{dadosPaciente.nome}</Titulo>
        </Box>

        <Titulo color="red.500" mb={1}>Suas Informações</Titulo>

        <Text fontSize="lg" borderColor="#1C1C1C" borderWidth="1" borderRadius="20" p="4" m="2" width="90%">Estado: {dadosPaciente?.endereco?.estado}</Text>
        <Text fontSize="lg" borderColor="#1C1C1C" borderWidth="1" borderRadius="20" p="4" m="2" width="90%">Telefone: {dadosPaciente?.telefone}</Text>
        <Text fontSize="lg" borderColor="#1C1C1C" borderWidth="1" borderRadius="20" p="4" m="2" width="90%">Email: {dadosPaciente?.email}</Text>


        <Titulo color="red.500" mb={1}>Planos de Saúde</Titulo>
        {
          dadosPaciente?.planosSaude?.map((plano, index) => (
            <Text fontSize="lg" borderColor="#1C1C1C" borderWidth="1" borderRadius="20" p="4" m="1" width="90%" key={index}>{plano}</Text>
          ))
        }

        <Botao mt={5} mb={5} backgroundColor="red.500" borderRadius="30" w="350" onPress={deslogar}>
          <Text fontSize="lg" color="#fff">
            Sair
          </Text>
        </Botao>
      </VStack>
    </ScrollView>
  )
}