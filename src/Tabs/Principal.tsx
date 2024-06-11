import React, { useState } from "react";
import { VStack, Image, Box, ScrollView, Text, Divider } from "native-base";
import Logo from '../assets/Logo.png';
import { Botao } from "../componentes/Botao";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Titulo } from "../componentes/titulo";
import { depoimentos } from "../utils/mock";
<<<<<<< HEAD
import { buscarEspecialistaPorEstado } from "../servicos/EspecialistaServico";
import { CardConsulta } from "../componentes/CardConsulta";
import Dipirona from '../assets/dipirona.png';
import Ibuprofeno from '../assets/ibuprofeno.png';
import Dorflex from '../assets/dorflex.png'
import Amoxilina from '../assets/Amoxilina.png'
import Ciprofloxacino from '../assets/ciprofloxacino.png'
import Cefalexina from '../assets/Cefalexina.png'
import { Remedios } from '../remedios/Remedios';
=======
import { CardConsulta } from "../componentes/CardConsulta";
import { buscarEspecialistaPorEstado } from "../servicos/EspecialistaServico";
import { useState } from "react";

>>>>>>> 245b7cca84095f7efda197c720bb147615837202

interface Especialista {
  nome: string,
  imagem: string,
  especialidade: string,
  id: string,
}

<<<<<<< HEAD
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
=======
export default function Principal({navigation}){
>>>>>>> 245b7cca84095f7efda197c720bb147615837202
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

  function voltarSecao() {
    navigation.replace('Login')
   }

  return (
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
<<<<<<< HEAD
        <Image source={Logo} alt="Logo" mt={10} />
        <Titulo color="blue.500">Boas-vindas!</Titulo>

        <Box w="100%" borderRadius="lg" p={3} mt={10} shadow="1" borderRightRadius="md">
=======
        <Box w="100%" borderRadius="lg" p={3} mt={5} shadow="1" borderRightRadius="md">
>>>>>>> 245b7cca84095f7efda197c720bb147615837202
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
          <Botao mt={3} mb={3} onPress={buscar}>
            Buscar
          </Botao>
        </Box>


        <Titulo color="red.800" alignSelf="center">Depoimentos</Titulo>
        <VStack space={3} divider={<Divider />} w="100%">
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
<<<<<<< HEAD

        <Titulo color="blue.800" alignSelf="center">Remédios</Titulo>
        <Box w="100%" borderRadius="lg" p={3} shadow={1} mt={5}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Analgezico?.map((remedio, index) => (
              <Box key={index} borderRadius="lg" p={3} shadow="1" mr={4}>
                <Remedios
                  nome={remedio.nome}
                  foto={remedio.imagem}
                  description={remedio.description}
                  // onPress={() => navigation.navigate('Agendamento', { remedioId: remedio.id })}
                />
=======
          {
            depoimentos.map(depoimento => (
              <Box key={depoimento.id} w="100%" borderRadius="lg" p={3}>
                <Text color="gray.300" fontSize="md" textAlign="justify">
                  {depoimento.text}
                </Text>
                <Text color="gray.500" fontSize="lg" fontWeight="bold" alignSelf="center" mt="2">{depoimento.titulo}</Text>
>>>>>>> 245b7cca84095f7efda197c720bb147615837202
              </Box>
            ))}
          </ScrollView>
        </Box>
       
        <Box w="100%" borderRadius="lg" p={3} shadow={1} mt={5}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Antibióticos?.map((remedio, index) => (
              <Box key={index} borderRadius="lg" p={3} shadow="1" mr={4}>
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