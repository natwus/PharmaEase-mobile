import React from 'react';
import { Text, VStack } from 'native-base';
import { Image, TouchableOpacity } from 'react-native';

interface CardProps {
  nome: string;
  foto: number;
  description: string;
  onPress?: () => void;
}

export function Remedios({ nome, foto, description, onPress }: CardProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <VStack alignItems="center" mr={10}>
        <Image 
          source={foto} 
          style={{ width: 100, height: 100, borderRadius: 25 }} 
        />
        <VStack pl="4" maxW="230px">
          <Text fontSize="md" bold>{nome}</Text>
          <Text fontSize="12px">{description}</Text>
        </VStack>
      </VStack>
    </TouchableOpacity>
  );
}