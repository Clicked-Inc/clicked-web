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
} from '@chakra-ui/react';
import Fonts from 'src/Components/Icon/Assets/Fonts';

const ExperienceLevel = () => {
  return (
    <Box>
      <Flex isInline>
        <Text theme={Fonts} textStyle="h1">
          Explorer
        </Text>
        <Spacer />
        <Badge
          textTransform="none"
          variant="solid"
          variantColor="orange"
          rounded={10}
          my={5}
          h={5}
        >
          UI/UX
        </Badge>
      </Flex>
      <Progress value={60} colorScheme="orange" rounded="full" />
      <Stack isInline>
        <Text>Level 1</Text>
        <Spacer />
        <Text> 50 / 500 points</Text>
      </Stack>
      <Flex isInline>
        <Text theme={Fonts} textStyle="h1">
          Builder
        </Text>
        <Spacer />
        <Badge
          textTransform="none"
          variant="solid"
          variantColor="orange"
          rounded={10}
          my={5}
          h={5}
        >
          Visual Graphic Design
        </Badge>
      </Flex>
      <Progress value={60} colorScheme="orange" rounded="full" />
      <Stack isInline>
        <Text>Level 1</Text>
        <Text> 50 / 500 points</Text>
      </Stack>
    </Box>
  );
};
export default ExperienceLevel;
