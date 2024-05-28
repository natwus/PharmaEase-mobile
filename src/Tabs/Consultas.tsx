import { VStack, Divider, ScrollView } from 'native-base'
import { Botao } from '../componentes/Botao'
import { CardConsulta } from '../componentes/CardConsulta'
import { Titulo } from '../componentes/titulo'

const medicos = [
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
        foiAgendado: false,
        foiAtendido: true,
    }
];

export default function Consultas() {
    return (
        <ScrollView p="5">
            <Titulo color="blue.500">Minhas consultas</Titulo>
            <Botao mt={5} mb={5}>Agendar nova consulta</Botao>

            <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Próximas consultas</Titulo>
            <CardConsulta
                nome="Dra. Kelly Nguissa"
                especialidade="Pediatra"
                foto="https://p16-flow-sign-va.ciciai.com/ocean-cloud-tos-us/d5f25d246585490391f5aef5ce0bdd47.png~tplv-6bxrjdptv7-image.png?rk3s=18ea6f23&x-expires=1747936967&x-signature=fDQ6G78Lfy08x1HEGx%2BUxa%2BgY7s%3D"
                data="20/06/2024"
                foiAgendado
                foiAtendido={false}
            />

            <Divider mt={5} />

            <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Consultas passadas</Titulo>
            {medicos.map((consulta, index) => (
                    <VStack key={index} mb={2}>
                        <CardConsulta
                            especialidade={consulta.especialidade}
                            foto={consulta.foto}
                            nome={consulta.nome}
                            data={consulta.data}
                            foiAgendado={consulta.foiAgendado}
                            foiAtendido={consulta.foiAtendido}
                        />
                    </VStack>
                ))}
        </ScrollView>
    )
}