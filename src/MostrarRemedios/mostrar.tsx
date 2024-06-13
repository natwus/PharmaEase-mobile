// AntibioticosDisplay.js

import React from 'react';
import { Box, ScrollView } from 'native-base';
import { Remedios } from '../remedios/Remedios';

const AntibioticosDisplay = ({ antibioticos, navigation, agendar }) => {
  return (
    <Box w="100%" borderRadius="lg" p={5} shadow={1} mt={4}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {antibioticos.map((remedio, index) => (
          <Box key={index} borderRadius="lg" p={3} bgColor={'green.100'} mr={4}>
            <Remedios
              nome={remedio.nome}
              foto={remedio.imagem}
              description={remedio.description}
              onPress={() => agendar(remedio)} // Passa o remédio como parâmetro
            />
          </Box>
        ))}
      </ScrollView>
    </Box>
  );
};

export default AntibioticosDisplay;