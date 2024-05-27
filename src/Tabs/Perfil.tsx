import { VStack, Text, ScrollView, Avatar, Divider } from "native-base";
import { Titulo } from "../componentes/titulo";

export default function Perfil() {
    return (
        <ScrollView flex={1}>
            <VStack flex={1} alignItems={"center"} p={5}>
                <Titulo color={"blue.500"}>Meu Perfil</Titulo>
                <Avatar size={"xl"} source={{uri: "https://avatars.githubusercontent.com/u/26756955?v=4"}}mt={5}/>
                <Titulo color={"blue.500"}>Informações pessoas</Titulo>
                <Titulo fontSize={"lg"}>Roberto Moraes</Titulo>
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