import React from 'react';
import { Text, VStack } from 'native-base';
import { Image, TouchableOpacity } from 'react-native';

interface CardProps {
  nome: string;
  foto: string;
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
      <VStack flexDir="row">
        <Image 
          source={{ uri: foto }} 
          style={{ width: 200, height: 200, borderRadius: 25 }} 
        />
        <VStack pl="4">
          <Text fontSize="md" bold>{nome}</Text>
          <Text fontSize="md" maxW={'110px'} bold>{description}</Text>
        </VStack>
      </VStack>
    </TouchableOpacity>
  );
}