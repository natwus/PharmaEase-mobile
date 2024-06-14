import { Text, Image, VStack } from 'native-base'
import { Botao } from './Botao'

interface CardProps {
  nome: string;
  foto: string;
  especialidade: string;
  data?: string;
  foiRecebido?: boolean;
  foiPedido?: boolean;
  onPress?: () => void;
}

export function CardConsulta({
  nome,
  foto,
  data,
  especialidade,
  foiRecebido,
  foiPedido,
  onPress
}: CardProps) {
  return (
    <VStack w="100%" bg={foiRecebido ? 'green.100' : 'white'} p="5" borderRadius="lg" shadow="2" mb={5}>
      <VStack flexDir="row">
        <Image size="80px" source={{ uri: foto }} alt='' />
        <VStack pl="4">
          <Text fontSize="md" bold>{nome}</Text>
          <Text>{especialidade}</Text>
          <Text>{data}</Text>
        </VStack>
      </VStack>
      <Botao
        backgroundColor="red.500"
        _text={{ color: "white" }}
        borderRadius="md"
        _hover={{ backgroundColor: "red.600" }}
        _pressed={{ backgroundColor: "red.700" }}
        shadow="3" onPress={onPress}>
        {foiPedido ? 'Cancelar' : 'Fazer Pedido'}
      </Botao>
    </VStack>
  )
}