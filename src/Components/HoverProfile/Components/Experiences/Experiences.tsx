import React from 'react';
import {
  Progress,
  Box,
  Text,
  Flex,
  Stack,
  Spacer,
  Circle,
} from '@chakra-ui/react';

const Experiences = ({ experiences }) => (
  <Box>
    <Flex isInline>
      <Text textStyle="h1" textAlign="center">
        Experiences
      </Text>
      <Spacer />
      <Circle size={6} bg="red.400" color="white" fontWeight="bold" my={5}>
        2
      </Circle>
    </Flex>
    {experiences.map((i) => (
      <Box key={i}>
        <Text fontSize="md" fontWeight="semibold" mb={3}>
          Improving Headspaces
        </Text>
        <Stack isInline>
          {Array(3)
            .fill('')
            .map((_, k) => (
              <Progress
                key={k}
                w="25%"
                value={100}
                colorScheme="orange"
                rounded="full"
              />
            ))}
          <Progress w="25%" value={0} colorScheme="orange" rounded="full" />
        </Stack>
        <Text mt={1}> Milestone 3 / 4 </Text>
      </Box>
    ))}
  </Box>
);

export default Experiences;
