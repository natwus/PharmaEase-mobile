import { Box, Input, VStack, useToast } from "native-base";
import { useState } from "react";
import { Botao } from "./componentes/Botao";
import { agendarConsulta } from "./servicos/ConsultaServico";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { converterStringParaData } from './utils/conversoes';
import { Titulo } from "./componentes/titulo";
import { EntradaTexto } from "./componentes/EntradaTexto";

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
            <Titulo color={'red.500'}>Agendamento</Titulo>
            <EntradaTexto placeholder="Digite a data" onChangeText={setData} />
            <Box width={"100%"} p={1}>
                <Botao bgColor={'gray.300'} mt={2} onPress={() => navigation.goBack()}>Voltar</Botao>
                <Botao onPress={agendar}>Agendar</Botao>
            </Box>
        </VStack>
    )
}