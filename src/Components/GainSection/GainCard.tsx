import React from 'react';
import { Flex, Text } from '@chakra-ui/layout';

interface GainCardProps {
  svg: any;
  name: string;
  description: string;
}

const GainCard: React.FC<GainCardProps> = ({ svg, name, description }) => {
  return (
    <Flex
      flexDir="column"
      p={6}
      bgColor="white"
      borderRadius={6}
      w={300}
      fontSize="20"
    >
      <Flex pb={3}>{svg}</Flex>
      <Text fontSize="16" fontWeight="bold" pb={3}>
        {name}
      </Text>
      <Text color="gray.500" pb={3} fontSize="14">
        {description}
      </Text>
    </Flex>
  );
};

export default GainCard;
