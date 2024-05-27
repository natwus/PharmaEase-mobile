import { VStack, Text, ScrollView, Avatar, Divider } from "native-base";
import { Titulo } from "../componentes/titulo";

export default function Perfil() {
    return (
        <ScrollView flex={1}>
            <VStack flex={1} alignItems={"center"} p={5}>
                <Titulo color={"blue.500"}>Meu Perfil</Titulo>
                <Avatar size={"xl"} source={{uri: "https://p16-flow-sign-va.ciciai.com/ocean-cloud-tos-us/04d17900d1594a489ad0810c1726e995.png~tplv-6bxrjdptv7-image.png?rk3s=18ea6f23&x-expires=1747857681&x-signature=x999fJ04idMtf596WYPF8RDjRpo%3D"}}mt={5}/>
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