import React, { useEffect, useState } from "react";
import { Animated, Easing } from 'react-native';
import { VStack, Box, ScrollView, Image, Text } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView, { Marker } from "react-native-maps";
import Logo from '../assets/Logo2 (2).png';
import { Titulo } from "../componentes/titulo";
import { Remedios } from '../remedios/Remedios';
import { pegarDadosPaciente } from "../servicos/PacienteServico";
import { Paciente } from '../interfaces/Paciente';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntiInflamatorios } from "../utils/antiinflamatorio";
import { Analgesicos } from "../utils/analgesicos";
import { Antibioticos } from "../utils/antibioticos";
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, watchPositionAsync, LocationAccuracy, LocationObject } from "expo-location";

export default function Principal({ navigation }) {
  const [dadosPaciente, setDadosPaciente] = useState({} as Paciente);
  const [remedioSelecionado, setRemedioSelecionado] = useState(null);
  const [localizacao, setLocalizacao] = useState<LocationObject | null>(null);
  const [farmacias, setFarmacias] = useState([]);
  const spinValue = new Animated.Value(0);

  async function fetchDadosPaciente() {
    const pacienteId = await AsyncStorage.getItem('pacienteId');
    if (!pacienteId) return null;

    const resultado = await pegarDadosPaciente(pacienteId);
    if (resultado) {
      setDadosPaciente(resultado);
    }
  }

  async function permissaoLocalizacao() {
    const { granted } = await requestForegroundPermissionsAsync();
    if (granted) {
      const posicaoAtual = await getCurrentPositionAsync();
      setLocalizacao(posicaoAtual);
    }
  }

  async function buscarFarmacias() {
    if (!localizacao) return;

    const latitude = localizacao.coords.latitude;
    const longitude = localizacao.coords.longitude;
    const apiKey = 'sua_apikey';
    const raio = 2000;

    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${raio}&type=pharmacy&key=${apiKey}`; //url de requisição do que esta no type

    try {
      const response = await fetch(url);
      const data = await response.json();
      setFarmacias(data.results); //coloca valor no usestate
    } catch (error) {
      console.error('Erro ao buscar farmácias próximas:', error);
    }
  }
  
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [spinValue]); //animação enquanto o mapa esta aguardando a permissao da loc

  useEffect(() => {
    fetchDadosPaciente();
  }, []);
                            //useeffects que iniciam ao montar o componente
  useEffect(() => {
    permissaoLocalizacao();
  }, []);

  useEffect(() => {
    buscarFarmacias();
  }, [localizacao]); //busca as farmaciacias quando a loc é atualizada

  useEffect(() => {
    let isMounted = true;
    const subscription = watchPositionAsync({
      accuracy: LocationAccuracy.Highest,
      timeInterval: 1000, //delay de 1000ms
      distanceInterval: 1
    }, (location) => {
      if (isMounted) setLocalizacao(location);
    }); //observa a posição do usuário

    return () => {
      isMounted = false;
      subscription.then(sub => sub.remove());
    };
  }, []);

  return (
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
        <Image source={Logo} alt="Logo" />
        <Titulo color="red.500">Boas-vindas, {dadosPaciente.nome}!</Titulo>
        <Text>Veja farmácias próximas:</Text>
        {/* (operador ternário) se a loc for aceita, renderiza o mapa, senao fica na animação */}
        {localizacao ? (
          (
            <MapView
              style={{ width: '100%', height: 180, marginTop: 5 }}
              initialRegion={{
                latitude: localizacao.coords.latitude,
                longitude: localizacao.coords.longitude,
                latitudeDelta: 0.008,
                longitudeDelta: 0.008,
              }}
              showsUserLocation={true}
            >
              {farmacias.map((farmacia, index) => (
                <Marker
                  key={index}
                  coordinate={{
                    latitude: farmacia.geometry.location.lat,
                    longitude: farmacia.geometry.location.lng,
                  }}
                  title={farmacia.name}
                />
              ))}
            </MapView>
          )
        ) : (
          <Animated.View style={{ transform: [{ rotate: spin }], alignSelf: 'center', padding: 30 }}>
            <Ionicons name="reload" size={54} color="black"
            />
          </Animated.View>
        )}
        <Titulo mt={3} color="red.500" alignSelf="center">Remédios em destaque</Titulo>
        {remedioSelecionado ? (
          <Box w="100%" borderRadius="lg" p={5} shadow={1} mt={4} bgColor={'green.100'}>
            <Remedios
              nome={remedioSelecionado.nome}
              foto={remedioSelecionado.imagem}
              description={remedioSelecionado.description}
              onPress={() => setRemedioSelecionado(null)}
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
                      onPress={() => navigation.navigate('Bula', { remedio: remedio })}
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
                      onPress={() => navigation.navigate('Bula', { remedio: remedio })}
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
                      onPress={() => navigation.navigate('Bula', { remedio: remedio })}
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