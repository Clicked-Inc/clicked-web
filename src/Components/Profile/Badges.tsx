import React from 'react';
<<<<<<< HEAD
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

=======
import { Wrap, WrapItem, Box, Text, Flex, Spacer } from '@chakra-ui/react';
import Fonts from '../../Components/Icon/Assets/Fonts';

import { Icon } from '../Icon';

const listOfBadges = (badges) => {
  return (
    <Wrap spacing={10} justify="center">
      {badges.map((badge) => {
        return <WrapItem my={2}>{<Icon name="BadgeOne" />}</WrapItem>;
      })}
    </Wrap>
  );
};
>>>>>>> 6c22e1d... almost done
const Badges = () => {
  return (
    <Box>
      <Flex isInline>
        <Text theme={Fonts} textStyle="h1">
          Your Badges
        </Text>
        <Spacer />
        <Text my={5} h={5}>
          View All
        </Text>
      </Flex>
<<<<<<< HEAD
=======
      <Box my={2}>{listOfBadges([1, 2, 3, 4, 5, 6, 7, 8])}</Box>
>>>>>>> 6c22e1d... almost done
    </Box>
  );
};
export default Badges;