import React from 'react';

import { VStack, Text } from '@chakra-ui/react';
import ClickedSVG from './ClickedSVG';

const SectionTitle: React.FC = ({ children }) => {
  return (
    <VStack
      spacing="-0.3rem"
      justifyContent="flex-start"
      alignItems="flex-start"
      py="1rem"
    >
      <ClickedSVG />
      <Text fontWeight="800" fontSize="2xl" color="black">
        {children}
      </Text>
    </VStack>
  );
};

export default SectionTitle;
