import { Box, Input, VStack, useToast, Image, Text } from "native-base";
import { useState } from "react";
import { Botao } from "./componentes/Botao";
import { agendarConsulta } from "./servicos/ConsultaServico";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { converterStringParaData } from './utils/conversoes';
import { Titulo } from "./componentes/titulo";
import { EntradaTexto } from "./componentes/EntradaTexto";
import React from "react";

export default function Agendamento({ route, navigation }: any) {
    const [data, setData] = useState('');
    const toast = useToast();

    async function agendar() {
        const pacieteId = await AsyncStorage.getItem('pacienteId');
        const { especialistaId } = route.params
        if (!pacieteId || !especialistaId || !data) return
        const dataFormatada = converterStringParaData(data);
        const resultado = await agendarConsulta(dataFormatada, especialistaId, pacieteId)
        if (resultado) {
            toast.show({
                title: 'Pedido efetuado com sucesso!',
                description: 'Pedido feito',
                backgroundColor: 'green.500'
            })
            return navigation.goBack();
        }
        toast.show({
            title: 'Erro ao fazer o pedido',
            description: 'Horário indisponível',
            backgroundColor: 'red.500'
        })
    }

    return (
        <VStack flex={1} alignItems="center" justifyContent="center" padding={5}>
            <Titulo color={'red.500'}>Fazer Pedido</Titulo>
            <EntradaTexto placeholder="Digite a data do pedido" onChangeText={setData} />
            <Box width={"100%"} p={1}>
                <Botao
                    bgColor={'gray.300'}
                    borderRadius="md"
                    _hover={{ backgroundColor: "grey.600" }}
                    _pressed={{ backgroundColor: "grey.700" }}
                    shadow="3"
                    onPress={() => navigation.goBack()}>Voltar</Botao>
                <Botao
                    backgroundColor="red.500"
                    _text={{ color: "white" }}
                    borderRadius="md"
                    _hover={{ backgroundColor: "red.600" }}
                    _pressed={{ backgroundColor: "red.700" }}
                    shadow="3"
                    onPress={agendar}>Confirmar Pedido</Botao>
            </Box>
        </VStack>
    )
}