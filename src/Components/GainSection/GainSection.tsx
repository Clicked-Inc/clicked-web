import React from 'react';

import {
  Flex,
  Box,
  Text,
  Icon,
  Center,
  Button,
  IconButton,
  Container,
  Circle,
  HStack,
} from '@chakra-ui/react';

import GainCard from './GainCard';

import { GainCardConstants } from './GainSection.constants';

const getGainCards = () => {
  console.log(GainCardConstants);
  let cardArray = [];
  GainCardConstants.forEach((item) => {
    cardArray.push(
      <Flex pr={6}>
        <GainCard
          svg={item.svg}
          name={item.name}
          description={item.description}
        />
      </Flex>
    );
  });
  return cardArray;
};

const GainSection: React.FC = () => {
  return (
    <Flex flexDir="column">
      <Text fontSize="xl" fontWeight="bold" pb={6}>
        What will I gain from this Challenge?
      </Text>
      <Flex>{getGainCards()}</Flex>
    </Flex>
  );
};

export default GainSection;
