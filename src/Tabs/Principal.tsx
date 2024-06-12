import React, { useEffect, useState } from "react";
import { VStack, Image, Box, ScrollView, Text, Divider } from "native-base";
import Logo from '../assets/Logo2 (2).png';
import { Botao } from "../componentes/Botao";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Titulo } from "../componentes/titulo";
import { buscarEspecialistaPorEstado } from "../servicos/EspecialistaServico";
import { CardConsulta } from "../componentes/CardConsulta";
import Dipirona from '../assets/dipirona.png';
import Ibuprofeno from '../assets/ibuprofeno.png';
import Dorflex from '../assets/dorflex.png'
import Amoxilina from '../assets/Amoxilina.png'
import Ciprofloxacino from '../assets/ciprofloxacino.png'
import Cefalexina from '../assets/Cefalexina.png'
import { Remedios } from '../remedios/Remedios';
import { pegarDadosPaciente } from "../servicos/PacienteServico";
import { Paciente } from '../interfaces/Paciente';
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Especialista {
  nome: string,
  imagem: string,
  especialidade: string,
  id: string,
}

const Analgezico = [
  {
    id: 1,
    nome: 'Dipirona',
    description: 'Dipirona 500Mg 30 Comprimidos - Prati Donaduzzi - Genérico',
    imagem: Dipirona,
  },
  {
    id: 2,
    nome: 'Ibuprofeno',
    description: 'Ibupril 400mg 20 Cápsulas Moles',
    imagem: Ibuprofeno,
  },
  {
    id: 3,
    nome: 'Dorflex',
    description: 'Dorflex Analgésico - 36 Comprimidos',
    imagem: Dorflex,
  }
  
]
const Antibióticos = [
  {
    id: 1,
    nome: 'Amoxicilina (Amoxil)',
    description: 'AMOXIL GSK CAIXA 30 CÁPSULAS',
    imagem: Amoxilina,
  },
  {
    id: 2,
    nome: 'Ciprofloxacino (Cipro)',
    description: 'Cloridrato de Ciprofloxacino 500mg Pharlab com 14 comprimidos Revestidos',
    imagem: Ciprofloxacino,
  },
  {
    id: 3,
    nome: 'Cefalexina (Keflex)',
    description: 'Keflex Cefalexina 500mg 8 drágeas',
    imagem: Cefalexina,
  }
  
];

export default function Principal({ navigation }) {
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

  return (
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
        <Image source={Logo} alt="Logo" mt={10} />
        <Titulo color="red.500">Boas-vindas, {dadosPaciente.nome}!</Titulo>

        <Box w="100%" borderRadius="lg" p={3} mt={10} shadow="1" borderRightRadius="md">
          <EntradaTexto
            placeholder="Digite a especialidade"
            value={especialidade}
            onChangeText={setEspecialidade}
          />
          <EntradaTexto
            placeholder="Digite sua localização"
            value={estado}
            onChangeText={setEstado}
          />
          <Botao mt={3} mb={3} onPress={buscar} backgroundColor="red.600">
            Buscar
          </Botao>
        </Box>
        {resultadoBusca?.map((especialista: Especialista, index) => (
          <VStack flex={1} w="100%" alignItems="flex-start" bgColor="white" key={index}>
            <CardConsulta
              especialidade={especialista.especialidade}
              foto={especialista.imagem}
              nome={especialista.nome}
              onPress={() => navigation.navigate('Agendamento', { especialistaId: especialista.id })}
            />
          </VStack>
        ))}

        <Titulo color="blue.800" alignSelf="center">Em destaque</Titulo>
        <Box w="100%" borderRadius="lg" p={5} shadow={1} mt={5}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Analgezico?.map((remedio, index) => (
              <Box key={index} borderRadius="lg" p={3} shadow={1} bgColor={'green.100'} mr={4}>
                <Remedios
                  nome={remedio.nome}
                  foto={remedio.imagem}
                  description={remedio.description}
                  // onPress={() => navigation.navigate('Agendamento', { remedioId: remedio.id })}
                />
              </Box>
            ))}
          </ScrollView>
        </Box>
       
        <Box w="100%" borderRadius="lg" p={5} shadow={1} mt={5}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Antibióticos?.map((remedio, index) => (
              <Box key={index} borderRadius="lg" p={3} shadow="1" bgColor={'green.100'} mr={4}>
                <Remedios
                  nome={remedio.nome}
                  foto={remedio.imagem}
                  description={remedio.description}
                  // onPress={() => navigation.navigate('Agendamento', { remedioId: remedio.id })}
                />
              </Box>
            ))}
          </ScrollView>
        </Box>

      </VStack>
    </ScrollView>
  );
}