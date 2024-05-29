import { VStack, Image, Text, Box, Link, useToast } from 'native-base';
import Logo from './assets/Logo.png';
import { TouchableOpacity } from 'react-native';
import { Botao } from './componentes/Botao';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Titulo } from './componentes/titulo';
import { useEffect, useState } from 'react';
import { fazerLogin } from './servicos/AutenticacaoServico';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode, JwtDecodeOptions } from 'jwt-decode';

export default function Login({ navigation } : any) {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [carreando, setCarregando] = useState(true)
    const toast = useToast()
    

    useEffect(()=>{
        async function verificarLogin() {
            const token = await AsyncStorage.getItem('token')
            if(token){
                navigation.replace('Tabs')
            }
            setCarregando(false)
        }
        verificarLogin()
    },[])

    async function login() {
        const resultado = await fazerLogin(email, senha)
        if(resultado){
            const { token } = resultado
            AsyncStorage.setItem('token', token)
            const tokenDecodificado = jwtDecode(token) as any
            const pacienteId = tokenDecodificado.id
            AsyncStorage.setItem('pacienteid', pacienteId)
            navigation.replace('Tabs')
        }else{
            toast.show({
                title: "Erro no login",
                description: "Email ou senha não conferem",
                backgroundColor: "red.500"
            })
        }
    }

    if(carreando){
        return null
    }

    return (
        <VStack flex={1} alignItems='center' justifyContent="center" p={5}>
            <Image source={Logo} alt='Login'></Image>
            <Titulo>
                Faça Login em sua conta
            </Titulo>
            <Box>
                <EntradaTexto
                    placeholder='Insira seu email' 
                    label='Email'
                    value={email}
                    onChangeText={setEmail}
                />
                <EntradaTexto 
                    placeholder='Insira sua senha' 
                    label='Senha' 
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={true}
                />
            </Box>
            <Botao onPress={login}>
                Entrar
            </Botao>
            <Link href='https://google.com.br' mt={2}>Esqueceu sua senha?</Link>
            <Box w={'100%'} flexDirection={'row'} justifyContent={'center'} mt={2}>
                <Text>Ainda não tem cadastro?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                    <Text color={'blue.500'}>Faça seu cadastro</Text>
                </TouchableOpacity>
            </Box>
        </VStack>
    );
}