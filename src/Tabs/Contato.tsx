import React, { useState } from 'react';
import { VStack, ScrollView, Center, useToast } from 'native-base';
import { Titulo } from '../componentes/titulo';
import { EntradaTexto } from '../componentes/EntradaTexto';
import { Botao } from '../componentes/Botao';

export default function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const toast = useToast();

  const EnviarMensagem = async () => {
    // verificar campo vazio
    if (!nome || !email || !mensagem) {
      toast.show({
        title: "Erro",
        description: "Todos os campos são obrigatórios",
        backgroundColor: "red.500",
        duration: 3000
      });
      return;
    }

    try {
      // const faz uma requisição pra api e envia os dados preenchidos
      const response = await fetch('http://192.168.1.107:4000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ //transforma objeto em json
          to: 'biotech.pharmaease@gmail.com',
          subject: `Mensagem de ${nome}, ${email}`,
          text: mensagem,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setNome('');
        setEmail('');
        setMensagem('');
        toast.show({
          title: "Sucesso",
          description: "Mensagem enviada com êxito!",
          backgroundColor: "green.500",
          duration: 3000
        }); //se for tudo certo limpa os campos
      } else {
        throw new Error(data.error || 'Erro ao enviar o e-mail');
      }
    } catch (error) {
      toast.show({
        title: "Erro",
        description: error.message || "Falha ao tentar enviar a mensagem.",
        backgroundColor: "red.500",
        duration: 3000
      });
      console.log(error)
    }
  };

  return (
    <ScrollView flex={1} bgColor="#f0f0f0">
      <Center flex={1} py={10}>
        <VStack w="90%" borderRadius="xl" p={8} shadow="5" bgColor="white" space={4}>
          <Titulo fontSize="2xl" color="red.500" mb={5}>CONTATO</Titulo>
          <EntradaTexto placeholder="Nome" value={nome} onChangeText={setNome} />
          <EntradaTexto placeholder="Email" value={email} onChangeText={setEmail} />
          <EntradaTexto placeholder="Mensagem" value={mensagem} onChangeText={setMensagem} />
          <Botao onPress={EnviarMensagem} backgroundColor="red.500" _text={{ color: "white" }} borderRadius="md" _hover={{ backgroundColor: "red.600" }} _pressed={{ backgroundColor: "red.700" }} shadow="3" mb={2}>Enviar Mensagem</Botao>
        </VStack>
      </Center>
    </ScrollView>
  );
}