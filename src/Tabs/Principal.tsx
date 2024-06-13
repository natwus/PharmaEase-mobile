import React, { useEffect, useState } from "react";
import { VStack, Image, Box, ScrollView } from "native-base";
import Logo from '../assets/Logo2 (2).png';
import { Titulo } from "../componentes/titulo";
import { Remedios } from '../remedios/Remedios';
import { pegarDadosPaciente } from "../servicos/PacienteServico";
import { Paciente } from '../interfaces/Paciente';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Antibioticos, Analgesicos, AntiInflamatorios } from "../utils/mock";
import MapView, { Marker } from "react-native-maps";
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, LocationObject, watchPositionAsync, LocationAccuracy } from "expo-location";

export default function Principal({ navigation }) {
  const [dadosPaciente, setDadosPaciente] = useState({} as Paciente);
  const [remedioSelecionado, setRemedioSelecionado] = useState(null);

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

  const [localizacao, setLocalizacao] = useState<LocationObject | null>(null);

  async function permissaoLocalizacao() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const posicaoAtual = await getCurrentPositionAsync();
      setLocalizacao(posicaoAtual);
    }
  }

  useEffect(() => {
    permissaoLocalizacao();
  }, [])

  useEffect(()=>{
    watchPositionAsync({
      accuracy: LocationAccuracy.Highest,
      timeInterval: 1000,
      distanceInterval: 1
    }, (response)=>{
      setLocalizacao(response)
    });
  })

  return (
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
        <Image source={Logo} alt="Logo" />
        <Titulo color="red.500">Boas-vindas, {dadosPaciente.nome}!</Titulo>

        {localizacao &&
          <MapView
            style={{ width: '100%', height: 180, marginTop: 5 }}
            initialRegion={{
              latitude: localizacao.coords.latitude,
              longitude: localizacao.coords.longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.015
            }}
            showsUserLocation={true}
          >
            {/* <Marker
              coordinate={{
                latitude: localizacao.coords.latitude,
                longitude: localizacao.coords.longitude
              }}
            /> */}
          </MapView>
        }

        <Titulo mt={3} color="red.500" alignSelf="center">Remédios em destaque</Titulo>

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
            <Titulo mt={-1} mb={2} color='black' fontWeight='700'>ANALGÉSICOS</Titulo>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {Analgesicos?.map((remedio, index) => (
                  <Box
                    key={index}
                    borderRadius="lg"
                    borderColor={'black'}
                    borderWidth={1}
                    p={3}
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
            <Titulo mt={-1} mb={2} color='black' fontWeight='700'>ANTIBIÓTICOS</Titulo>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {Antibioticos?.map((remedio, index) => (
                  <Box
                    key={index}
                    borderRadius="lg"
                    borderColor={'black'}
                    borderWidth={1}
                    p={3}
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
            <Titulo mt={-1} mb={2} color='black' fontWeight='700'>ANTI-INFLAMATÓRIOS</Titulo>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {AntiInflamatorios?.map((remedio, index) => (
                  <Box
                    key={index}
                    borderRadius="lg"
                    borderColor={'black'}
                    borderWidth={1}
                    p={3}
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