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

const Badges = () => {
  return (
    <Box>
      <Flex isInline>
        <Text theme={Fonts} textStyle="h1">
          Your Badges
        </Text>
        <Spacer />
        {/* <Badges /> */}
        <Text my={5} h={5}>
          View All
        </Text>
      </Flex>
    </Box>
  );
};
export default Badges;
