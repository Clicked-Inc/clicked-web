import React from 'react';
import { Story } from '@storybook/react';
import {
  Badge,
  Progress,
  Box,
  Text,
  Flex,
  extendTheme,
  Stack,
  Image,
  Spacer,
  Circle,
} from '@chakra-ui/react';
import Fonts from 'src/Components/Icon/Assets/Fonts';

const listOfExperiences = (experiences) => {
  return (
    <div>
      {experiences.map((experience) => {
        return (
          <Box>
            <Text fontSize={16} fontWeight="semibold" mb={3}>
              Improving Headspaces
            </Text>
            <Stack isInline>
              {Array(3)
                .fill('')
                .map((_) => (
                  <Progress
                    w="25%"
                    value={100}
                    colorScheme="orange"
                    rounded="full"
                  />
                ))}
              <Progress w="25%" value={0} colorScheme="orange" rounded="full" />
            </Stack>
            <Text> Milestone 3/4 </Text>
          </Box>
        );
      })}
    </div>
  );
};
const Experiences = () => {
  return (
    <Box>
      <Flex isInline>
        <Text theme={Fonts} textStyle="h1">
          Experiences
        </Text>
        <Spacer />
        <Circle size={6} bg="tomato" color="white" my={5} h={5}>
          2
        </Circle>
      </Flex>
      {listOfExperiences([1, 2])}
    </Box>
  );
};
export default Experiences;
