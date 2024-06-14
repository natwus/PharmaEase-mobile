import {
  Box,
  VStack,
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

  const renderIfNotEmpty = (text: string, Component: any, componentProps = {}) => {
    return text ? <Component {...componentProps}>{text}</Component> : null;
  };

  return (
    <ScrollView>
      <VStack flex={1} alignItems="center" justifyContent="center" padding={5} space={4}>
        <Image source={remedio.imagem} alt={remedio.nome} size="400px" />
        <Titulo color={'black'}>{remedio.nome}</Titulo>
        {renderIfNotEmpty(remedio.description, Text)}
        <Titulo color='black' fontWeight='900'>--INFORMAÇÕES--</Titulo>
        {renderIfNotEmpty(remedio.Titulo, Titulo, { fontSize: '15px', color: 'black', fontWeight: 900, mt: 30 })}
        {renderIfNotEmpty(remedio.descricao, Text)}
        <Box flex={1} textAlign={'center'}>
          {renderIfNotEmpty(remedio.Subtitulo, Titulo, { fontSize: '15px', color: 'black', fontWeight: 900 })}
          {renderIfNotEmpty(remedio.Texto, Text)}
          {renderIfNotEmpty(remedio.Subtitulo2, Titulo, { fontSize: '15px', mt: 2, color: 'black', fontWeight: 900 })}
          {renderIfNotEmpty(remedio.Texto1, Text)}
          {renderIfNotEmpty(remedio.subtitulo3, Titulo, { fontSize: '15px', color: 'black', fontWeight: 900 })}
          {renderIfNotEmpty(remedio.Texto2, Text)}
          {renderIfNotEmpty(remedio.TextoD, Text)}
          {renderIfNotEmpty(remedio.SubTitulo4, Titulo, { fontSize: '15px', color: 'black', fontWeight: 900 })} 
          {renderIfNotEmpty(remedio.Texto4, Text)}
        </Box>
        <Botao onPress={Voltar} mt={2}>Voltar</Botao>
      </VStack>
    </ScrollView>
  );
}