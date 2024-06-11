
import React from 'react';
import { Text, VStack } from 'native-base';
import { Image, TouchableOpacity } from 'react-native';

interface CardProps {
  nome: string;
  foto: number; // Alterado para number
  description: string;
  onPress?: () => void;
}

export function Remedios({
  nome,
  foto,
  description,
  onPress
}: CardProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <VStack flexDir="row" alignItems="center" mr={4}>
        <Image 
          source={foto} // Passa a referência de recurso local diretamente
          style={{ width: 100, height: 100, borderRadius: 25 }} 
        />
        <VStack pl="4" maxW="110px">
          <Text fontSize="md" bold>{nome}</Text>
          <Text fontSize="md" bold>{description}</Text>
        </VStack>
      </VStack>
    </TouchableOpacity>
  );
}