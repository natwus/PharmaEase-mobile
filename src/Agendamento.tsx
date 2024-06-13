import { Box, Input, VStack, useToast, Image, Text} from "native-base";
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
    const { remedio } = route.params; // Recebe o remédio selecionado

    async function agendar() {
        const pacieteId = await AsyncStorage.getItem('pacienteId');
        const { especialistaId } = route.params
        if (!pacieteId || !especialistaId || !data) return
        const dataFormatada = converterStringParaData(data);
        const resultado = await agendarConsulta(dataFormatada, especialistaId, pacieteId)
        if (resultado) {
            toast.show({
                title: 'Consulta agendada com sucesso!',
                backgroundColor: 'green.500'
            })
            return navigation.goBack();
        }
        toast.show({
            title: 'Erro ao agendar consulta',
            description: 'Horário indisponível',
            backgroundColor: 'red.500'
        })
    }

    return (
        <VStack flex={1} alignItems="center" justifyContent="center" padding={5}>
            <Titulo color={'red.500'}>Fazer Pedido</Titulo>
            
            <EntradaTexto placeholder="Digite a data do pedido" onChangeText={setData} />
            <Box width={"100%"} p={1}>
                <Botao onPress={agendar}>Confirmar Pedido</Botao>
                <Botao bgColor={'gray.300'} mt={5} onPress={() => navigation.goBack()}>Voltar</Botao>
            </Box>
            <Box alignItems="center" mb={5}>
                <Image source={{ uri: remedio.foto }} alt={remedio.nome} size="xl" />
                <Titulo>{remedio.nome}</Titulo>
                <Text>{remedio.description}</Text>
            </Box>
        </VStack>
    )
}