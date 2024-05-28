import { VStack, Text, ScrollView, Avatar, Divider } from "native-base";
import { Titulo } from "../componentes/titulo";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { pegarDadosPaciente } from "../servicos/PacienteServico";
import { Paciente } from "../interfaces/Paciente";

export default function Perfil() {
    const [dadosPaciente, setDadosPaciente] = useState({} as Paciente)

    useEffect(()=>{
        async function dadosPaciente() {
            const pacienteId = await AsyncStorage.getItem('pacienteid')
            if(!pacienteId) return null

            const resultado = await pegarDadosPaciente(pacienteId)
            if(resultado){
                setDadosPaciente(resultado)
                console.log(resultado)
            }
        }
        dadosPaciente() 
    })
    return (
        <ScrollView flex={1}>
            <VStack flex={1} alignItems={"center"} p={5}>
                <Titulo color={"blue.500"}>Meu Perfil</Titulo>
                <Avatar size={"xl"} source={{uri: dadosPaciente.imagem}}mt={5}/>
                <Titulo color={"blue.500"}>Informações pessoas</Titulo>
                <Titulo fontSize={"lg"}>{dadosPaciente.nome}</Titulo>
                <Titulo>01/04/1998</Titulo>
                <Titulo>Votuporanga/SP</Titulo>
                <Divider mt={5}/>
                <Titulo color={"blue.500"}>Histórico médico</Titulo>
                <Text fontSize={18}>Bronquite</Text>
                <Text fontSize={18}>Sinusite</Text>
            </VStack>
        </ScrollView>
    )
}