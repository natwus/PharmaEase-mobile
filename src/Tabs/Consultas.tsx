import { VStack, Text } from "native-base";
import { CardConsulta } from "../componentes/CardConsulta";

export default function Consultas(){
    return(
        <VStack p={5}>
            <CardConsulta
                nome="Dra. Kelly Nguissa"
                especialidade="Pediatra"
                foto="https://p16-flow-sign-va.ciciai.com/ocean-cloud-tos-us/d5f25d246585490391f5aef5ce0bdd47.png~tplv-6bxrjdptv7-image.png?rk3s=18ea6f23&x-expires=1747936967&x-signature=fDQ6G78Lfy08x1HEGx%2BUxa%2BgY7s%3D"
                data="20/06/2024"
                foiAgendado
                foiAtendido={false}
            />
        </VStack>
    )
}