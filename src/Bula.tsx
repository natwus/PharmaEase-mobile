import {
  Box,
  Input,
  VStack,
  useToast,
  Image,
  Text,
  ScrollView,
} from "native-base";

import { Titulo } from "./componentes/titulo";

import React from "react";
import { Botao } from "./componentes/Botao";

export default function Bula({ route, navigation }: any) {
  const { remedio } = route.params; // Recebe o remédio selecionado

  function Voltar() {
    navigation.replace("Login");
  }

  return (
    <ScrollView>
      <VStack flex={1} alignItems="center" justifyContent="center" padding={5}>
        <Titulo>Informações</Titulo>
          <Image source={{ uri: remedio.foto }} alt={remedio.nome} size="xl" />
          <Titulo>{remedio.nome}</Titulo>
          <Text>{remedio.description}</Text>
          <Titulo fontSize={'15px'} color={'black'} fontWeight={900} mt={30} >{remedio.Titulo}</Titulo>
          <Text>{remedio.descricao}</Text>
          <Box flex={1}  textAlign={'center'}>
          <Titulo fontSize={'15px'} color={'black'} fontWeight={900}>{remedio.Subtitulo}</Titulo>
          <Text mt={2} color={'black'} fontWeight={900} >{remedio.Subtitulo2}</Text>
          <Text>{remedio.Texto1}</Text>
          <Text>{remedio.subtitulo3}</Text>
          <Text>{remedio.Texto}</Text>
          </Box>
        <Botao onPress={Voltar}>Voltar</Botao>
      </VStack>
    </ScrollView>
  );
}
