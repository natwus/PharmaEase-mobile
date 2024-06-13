import React, { useEffect, useState } from "react";
import { VStack, Image, Box, ScrollView } from "native-base";
import Logo from '../assets/Logo2 (2).png';
import { Titulo } from "../componentes/titulo";
import { buscarEspecialistaPorEstado } from "../servicos/EspecialistaServico";
import { Remedios } from '../remedios/Remedios';
import { pegarDadosPaciente } from "../servicos/PacienteServico";
import { Paciente } from '../interfaces/Paciente';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Antibioticos, Analgesicos } from "../utils/mock";
import MapView from "react-native-maps";
import { Platform, PermissionsAndroid } from "react-native";

interface Especialista {
  nome: string;
  imagem: string;
  especialidade: string;
  id: string;
}

export default function Principal({ navigation }) {
  const [estado, setEstado] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [resultadoBusca, setResultadoBuscar] = useState([]);
  const [dadosPaciente, setDadosPaciente] = useState({} as Paciente);
  const [remedioSelecionado, setRemedioSelecionado] = useState(null);

  async function buscar() {
    if (!estado || !especialidade) return null;
    const resultado = await buscarEspecialistaPorEstado(estado, especialidade);
    if (resultado) {
      setResultadoBuscar(resultado);
      console.log(resultado);
    }
  }

  useEffect(() => {
    async function fetchDadosPaciente() {
      const pacienteId = await AsyncStorage.getItem('pacienteId');
      if (!pacienteId) return null;

      const resultado = await pegarDadosPaciente(pacienteId);
      if (resultado) {
        setDadosPaciente(resultado);
      }
    }
    fetchDadosPaciente();
  }, []);

  return (
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
        <Image source={Logo} alt="Logo" mt={10} />
        <Titulo color="red.500">Boas-vindas, {dadosPaciente.nome}!</Titulo>

        <MapView
          onMapReady={() => {
            if (Platform.OS === 'android') {
              PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
              ).then(() => {
                console.log('aceitou');
              });
            }
          }}
          style={{ width: '100%', height: 180, marginTop: 5 }}
          initialRegion={{
            latitude: -20.416370,
            longitude: -49.975278,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />

        <Titulo mt={3} color="red.500" alignSelf="center">Em destaque</Titulo>

        {remedioSelecionado ? (
          <Box w="100%" borderRadius="lg" p={5} shadow={1} mt={4} bgColor={'green.100'}>
            <Remedios
              nome={remedioSelecionado.nome}
              foto={remedioSelecionado.imagem}
              description={remedioSelecionado.description}
              onPress={() => setRemedioSelecionado(null)} // Voltar para a lista completa
            />
          </Box>
        ) : (
          <>
            <Box w="100%" borderRadius="lg" p={5} shadow={1} mt={4}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {Analgesicos?.map((remedio, index) => (
                  <Box
                    key={index}
                    borderRadius="lg"
                    p={3}
                    shadow={1}
                    bgColor={'green.100'}
                    mr={4}
                   
                  >
                    <Remedios
                      nome={remedio.nome}
                      foto={remedio.imagem}
                      description={remedio.description}
                      onPress={() => navigation.navigate('Bula',{remedio:remedio})} // Definir o remédio selecionado
                    />
                  </Box>
                ))}
              </ScrollView>
            </Box>

            <Box w="100%" borderRadius="lg" p={5} shadow={1} mt={5}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {Antibioticos?.map((remedio, index) => (
                  <Box
                    key={index}
                    borderRadius="lg"
                    p={3}
                    shadow={1}
                    bgColor={'green.100'}
                    mr={4}
                   
                  >
                    <Remedios
                      nome={remedio.nome}
                      foto={remedio.imagem}
                      description={remedio.description}
                      onPress={() => navigation.navigate('Bula',{remedio:remedio})} // Definir o remédio selecionado
                    />
                  </Box>
                ))}
              </ScrollView>
            </Box>
          </>
        )}
      </VStack>
    </ScrollView>
  );
}