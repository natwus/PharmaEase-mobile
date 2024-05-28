import { VStack, Divider, ScrollView } from 'native-base'
import { Botao } from '../componentes/Botao'
import { CardConsulta } from '../componentes/CardConsulta'
import { Titulo } from '../componentes/titulo'

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
            <CardConsulta
                nome='Dr. Roberto Moraes'
                especialidade='Cardiologista'
                foto='https://github.com/robertoSRMJunior.png'
                data='20/04/2023'
                foiAtendido
            />
            <CardConsulta
                nome='Dr. Roberto Moraes'
                especialidade='Cardiologista'
                foto='https://github.com/robertoSRMJunior.png'
                data='20/04/2023'
                foiAtendido
            />
            <CardConsulta
                nome='Dr. Roberto Moraes'
                especialidade='Cardiologista'
                foto='https://github.com/robertoSRMJunior.png'
                data='20/04/2023'
                foiAtendido
            />
        </ScrollView>
    )
}