import React from 'react';
import { Story } from '@storybook/react';
import {
  Wrap,
  WrapItem,
  Box,
  Text,
  Flex,
  extendTheme,
  Stack,
  Image,
  Spacer,
} from '@chakra-ui/react';
import Fonts from '../../Components/Icon/Assets/Fonts';

const listOfBadges = (badges) => {
  return (
    <Box display="flex" flexWrap="wrap">
      {badges.map((badge) => {
        return (
          <Image
            m={3}
            borderRadius="full"
            boxSize={55}
            objectFit="cover"
            src="https://bit.ly/sage-adebayo"
            alt="badges"
          />
        );
      })}
    </Box>
  );
};

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
      <Flex justifyContent="space-around" flexWrap="wrap">
        {listOfBadges([1, 2, 3, 4, 5, 6, 7, 8])}
      </Flex>
    </Box>
  );
};
export default Badges;
