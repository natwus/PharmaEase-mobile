import React, { useState } from 'react';
import { VStack, Input, Button, Box, Text, ScrollView, Center, useToast } from 'native-base';
import { Titulo } from '../componentes/Titulo';
import { EntradaTexto } from '../componentes/EntradaTexto';
import { Botao } from '../componentes/Botao';

export default function Contato({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const toast = useToast();

  const EnviarMensagem = () => {
    if (!nome || !email || !mensagem) {
      toast.show({
        title: "Erro",
        description: "Todos os campos são obrigatórios",
        backgroundColor: "red.500",
        duration: 3000
      });
      return; 
    }

    toast.show({
      title: "Mensagem enviada",
      description: "Obrigado por entrar em contato!",
      backgroundColor: "green.500",
      duration: 3000
    });

    setNome('');
    setEmail('');
    setMensagem('');

  };
  
  return (
    <ScrollView flex={1} bgColor="#f0f0f0">
      <Center flex={1} py={10}>
        <VStack w="90%" borderRadius="xl" p={8} shadow="5" bgColor="white" space={4}>
          <Titulo fontSize="2xl" color="red.500" mb={5}>
            CONTATO
          </Titulo>
          <EntradaTexto
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
          />
          <EntradaTexto
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <EntradaTexto
            placeholder="Mensagem"
            value={mensagem}
            onChangeText={setMensagem}
          />
          <Botao
            onPress={EnviarMensagem}
            backgroundColor="red.500"
            _text={{ color: "white" }}
            borderRadius="md"
            _hover={{ backgroundColor: "red.600" }}
            _pressed={{ backgroundColor: "red.700" }}
            shadow="3"
            mb={2} 
          >
            Enviar Mensagem
          </Botao>
        </VStack>
      </Center>
    </ScrollView>
  );
}