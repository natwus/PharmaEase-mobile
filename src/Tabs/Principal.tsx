import { VStack, Box, ScrollView, Image, Text, Divider } from "native-base";

import { EntradaTexto } from "../componentes/EntradaTexto";
import { Botao } from "../componentes/Botao";
import Logo from '../assets/Logo.png';
import { Titulo } from "../componentes/titulo";
import AsyncStorage from "@react-native-async-storage/async-storage";

const depoimentos = [
    {
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet justo non tellus ornare blandit sit amet ut augue. Maecenas tortor tortor, imperdiet a mi non, maximus vulputate nisi. Donec nec arcu ex. Nam commodo sodales augue sed vulputate. Morbi et mattis dui. Suspendisse maximus, nibh non sodales commodo, elit sapien tincidunt nibh, at varius orci purus sit amet neque.",
        pessoa: "Mareus Senai, 299 anos, Votuporanga/SP"
    },
    {
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet justo non tellus ornare blandit sit amet ut augue. Maecenas tortor tortor, imperdiet a mi non, maximus vulputate nisi. Donec nec arcu ex. Nam commodo sodales augue sed vulputate. Morbi et mattis dui. Suspendisse maximus, nibh non sodales commodo, elit sapien tincidunt nibh, at varius orci purus sit amet neque.",
        pessoa: "Mareus Senai, 299 anos, Votuporanga/SP"
    },
    {
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet justo non tellus ornare blandit sit amet ut augue. Maecenas tortor tortor, imperdiet a mi non, maximus vulputate nisi. Donec nec arcu ex. Nam commodo sodales augue sed vulputate. Morbi et mattis dui. Suspendisse maximus, nibh non sodales commodo, elit sapien tincidunt nibh, at varius orci purus sit amet neque.",
        pessoa: "Mareus Senai, 299 anos, Votuporanga/SP"
    },
    {
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet justo non tellus ornare blandit sit amet ut augue. Maecenas tortor tortor, imperdiet a mi non, maximus vulputate nisi. Donec nec arcu ex. Nam commodo sodales augue sed vulputate. Morbi et mattis dui. Suspendisse maximus, nibh non sodales commodo, elit sapien tincidunt nibh, at varius orci purus sit amet neque.",
        pessoa: "Mareus Senai, 299 anos, Votuporanga/SP"
    },
    {
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet justo non tellus ornare blandit sit amet ut augue. Maecenas tortor tortor, imperdiet a mi non, maximus vulputate nisi. Donec nec arcu ex. Nam commodo sodales augue sed vulputate. Morbi et mattis dui. Suspendisse maximus, nibh non sodales commodo, elit sapien tincidunt nibh, at varius orci purus sit amet neque.",
        pessoa: "Mareus Senai, 299 anos, Votuporanga/SP"
    },
    {
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet justo non tellus ornare blandit sit amet ut augue. Maecenas tortor tortor, imperdiet a mi non, maximus vulputate nisi. Donec nec arcu ex. Nam commodo sodales augue sed vulputate. Morbi et mattis dui. Suspendisse maximus, nibh non sodales commodo, elit sapien tincidunt nibh, at varius orci purus sit amet neque.",
        pessoa: "Mareus Senai, 299 anos, Votuporanga/SP"
    },
    {
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet justo non tellus ornare blandit sit amet ut augue. Maecenas tortor tortor, imperdiet a mi non, maximus vulputate nisi. Donec nec arcu ex. Nam commodo sodales augue sed vulputate. Morbi et mattis dui. Suspendisse maximus, nibh non sodales commodo, elit sapien tincidunt nibh, at varius orci purus sit amet neque.",
        pessoa: "Mareus Senai, 299 anos, Votuporanga/SP"
    },
    {
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet justo non tellus ornare blandit sit amet ut augue. Maecenas tortor tortor, imperdiet a mi non, maximus vulputate nisi. Donec nec arcu ex. Nam commodo sodales augue sed vulputate. Morbi et mattis dui. Suspendisse maximus, nibh non sodales commodo, elit sapien tincidunt nibh, at varius orci purus sit amet neque.",
        pessoa: "Mareus Senai, 299 anos, Votuporanga/SP"
    },
    {
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet justo non tellus ornare blandit sit amet ut augue. Maecenas tortor tortor, imperdiet a mi non, maximus vulputate nisi. Donec nec arcu ex. Nam commodo sodales augue sed vulputate. Morbi et mattis dui. Suspendisse maximus, nibh non sodales commodo, elit sapien tincidunt nibh, at varius orci purus sit amet neque.",
        pessoa: "Mareus Senai, 299 anos, Votuporanga/SP"
    },
    {
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet justo non tellus ornare blandit sit amet ut augue. Maecenas tortor tortor, imperdiet a mi non, maximus vulputate nisi. Donec nec arcu ex. Nam commodo sodales augue sed vulputate. Morbi et mattis dui. Suspendisse maximus, nibh non sodales commodo, elit sapien tincidunt nibh, at varius orci purus sit amet neque.",
        pessoa: "Mareus Senai, 299 anos, Votuporanga/SP"
    },
    {
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet justo non tellus ornare blandit sit amet ut augue. Maecenas tortor tortor, imperdiet a mi non, maximus vulputate nisi. Donec nec arcu ex. Nam commodo sodales augue sed vulputate. Morbi et mattis dui. Suspendisse maximus, nibh non sodales commodo, elit sapien tincidunt nibh, at varius orci purus sit amet neque.",
        pessoa: "Mareus Senai, 299 anos, Votuporanga/SP"
    },
    {
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet justo non tellus ornare blandit sit amet ut augue. Maecenas tortor tortor, imperdiet a mi non, maximus vulputate nisi. Donec nec arcu ex. Nam commodo sodales augue sed vulputate. Morbi et mattis dui. Suspendisse maximus, nibh non sodales commodo, elit sapien tincidunt nibh, at varius orci purus sit amet neque.",
        pessoa: "Mareus Senai, 299 anos, Votuporanga/SP"
    },
    {
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet justo non tellus ornare blandit sit amet ut augue. Maecenas tortor tortor, imperdiet a mi non, maximus vulputate nisi. Donec nec arcu ex. Nam commodo sodales augue sed vulputate. Morbi et mattis dui. Suspendisse maximus, nibh non sodales commodo, elit sapien tincidunt nibh, at varius orci purus sit amet neque.",
        pessoa: "Mareus Senai, 299 anos, Votuporanga/SP"
    },
    {
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet justo non tellus ornare blandit sit amet ut augue. Maecenas tortor tortor, imperdiet a mi non, maximus vulputate nisi. Donec nec arcu ex. Nam commodo sodales augue sed vulputate. Morbi et mattis dui. Suspendisse maximus, nibh non sodales commodo, elit sapien tincidunt nibh, at varius orci purus sit amet neque.",
        pessoa: "Mareus Senai, 299 anos, Votuporanga/SP"
    },
    {
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet justo non tellus ornare blandit sit amet ut augue. Maecenas tortor tortor, imperdiet a mi non, maximus vulputate nisi. Donec nec arcu ex. Nam commodo sodales augue sed vulputate. Morbi et mattis dui. Suspendisse maximus, nibh non sodales commodo, elit sapien tincidunt nibh, at varius orci purus sit amet neque.",
        pessoa: "Mareus Senai, 299 anos, Votuporanga/SP"
    },
    {
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet justo non tellus ornare blandit sit amet ut augue. Maecenas tortor tortor, imperdiet a mi non, maximus vulputate nisi. Donec nec arcu ex. Nam commodo sodales augue sed vulputate. Morbi et mattis dui. Suspendisse maximus, nibh non sodales commodo, elit sapien tincidunt nibh, at varius orci purus sit amet neque.",
        pessoa: "Mareus Senai, 299 anos, Votuporanga/SP"
    },
]

export default function Principal() {
    return (
        <ScrollView>
            <VStack p={5}>
                <VStack>
                    <Image source={Logo} alt='Logo'></Image>
                    <Titulo color={"blue.500"} mb={5}>
                        Boas-Vindas!
                    </Titulo>
                </VStack>
                <VStack>
                    <Box p={5} borderRadius={'lg'} bgColor={'white'} w={'100%'}>
                        <EntradaTexto placeholder="Digite a especialidade"></EntradaTexto>
                        <EntradaTexto placeholder="Digite sua localização"></EntradaTexto>
                        <Botao>Buscar</Botao>
                    </Box>
                </VStack>
                <VStack>
                    <Titulo alignSelf={'center'} color={'blue.800'} mb={5}>Depoimentos</Titulo>
                    {depoimentos.map((depoimento, index)=>(
                        <VStack key={index}>
                            <Text mb={2}>{depoimento.texto}</Text>
                            <Text alignSelf={'center'} color={'gray.500'} fontWeight={'bold'}>{depoimento.pessoa}</Text>
                            <Divider mb={4}/>
                        </VStack>
                    ))}
                </VStack>
            </VStack>
        </ScrollView>
    )
}