import { VStack, ScrollView, Box } from "native-base";

import { EntradaTexto } from "../componentes/EntradaTexto";
import { Botao } from "../componentes/Botao";
import { Titulo } from "../componentes/titulo";
import { CardConsulta } from "../componentes/CardConsulta";

const consultas = [
    {
        especialidade: "Cardiologista",
        foto: "https://p16-flow-sign-va.ciciai.com/ocean-cloud-tos-us/aa7170568d3f47ca9f9cd89d13d6096f.png~tplv-6bxrjdptv7-image.png?rk3s=18ea6f23&x-expires=1747936764&x-signature=ouSCz120O2ttQMn9Vsx9FqVZo7k%3D",
        nome: "Dr. Jalim Rabei",
        data: "22/05/2024",
        foiAgendado: false,
        foiAtendido: true,
    },
    {
        especialidade: "Dermatologista",
        foto: "https://p16-flow-sign-va.ciciai.com/ocean-cloud-tos-us/4913df5a0ae54c8a95fdc1130282dd89.png~tplv-6bxrjdptv7-image.png?rk3s=18ea6f23&x-expires=1747936840&x-signature=%2BZ71iZD60wnnz0VObLZDnroXF5E%3D",
        nome: "Dra. Paula Tejando",
        data: "23/05/2024",
        foiAgendado: true,
        foiAtendido: false,
    },
    {
        especialidade: "Oftalmologista",
        foto: "https://p16-flow-sign-va.ciciai.com/ocean-cloud-tos-us/61b2212496d744a9b283e3e9145fef4c.png~tplv-6bxrjdptv7-image.png?rk3s=18ea6f23&x-expires=1747936887&x-signature=Q2sjnMCh0HCnBILhfH0D3o6r5cg%3D",
        nome: "Dr. Paulo Brificado",
        data: "24/05/2024",
        foiAgendado: true,
        foiAtendido: false,
    },
    {
        especialidade: "Ortopedista",
        foto: "https://p16-flow-sign-va.ciciai.com/ocean-cloud-tos-us/1e14e42efb02498893ec0c100e96fab7.png~tplv-6bxrjdptv7-image.png?rk3s=18ea6f23&x-expires=1747936917&x-signature=RdArOnRyvO4AQcuYlwZvrRdRkWg%3D",
        nome: "Dr. Tomás Turbando",
        data: "25/05/2024",
        foiAgendado: true,
        foiAtendido: false,
    },
    {
        especialidade: "Pediatra",
        foto: "https://p16-flow-sign-va.ciciai.com/ocean-cloud-tos-us/d5f25d246585490391f5aef5ce0bdd47.png~tplv-6bxrjdptv7-image.png?rk3s=18ea6f23&x-expires=1747936967&x-signature=fDQ6G78Lfy08x1HEGx%2BUxa%2BgY7s%3D",
        nome: "Dra. Kelly Nguissa",
        data: "26/05/2024",
        foiAgendado: false,
        foiAtendido: true,
    }
];

export default function Explorar() {
    return (
        <ScrollView>
            <VStack p={3}>
                <VStack>
                    <Box p={5} borderRadius={'lg'} bgColor={'white'} w={'100%'}>
                        <EntradaTexto placeholder="Digite a especialidade"></EntradaTexto>
                        <EntradaTexto placeholder="Digite sua localização"></EntradaTexto>
                        <Botao>Buscar</Botao>
                    </Box>
                </VStack>
                <Titulo color={'blue.500'} alignSelf={'center'} mb={5}>Resultado da busca</Titulo>
                {consultas.map((consulta, index) => (
                    <VStack key={index} mb={2}>
                        <CardConsulta
                            especialidade={consulta.especialidade}
                            foto={consulta.foto}
                            nome={consulta.nome}
                            data={consulta.data}
                            foiAgendado={false}
                            foiAtendido={false}
                        />
                    </VStack>
                ))}
            </VStack>
        </ScrollView>
    )
}


