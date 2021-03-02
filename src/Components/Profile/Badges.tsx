import React from 'react';
import { Wrap, WrapItem, Box, Text, Flex, Spacer } from '@chakra-ui/react';
import { Icon } from '../Icon';

const Badges = ({ badges }) => (
  <Box mb={3}>
    <Flex isInline>
      <Text fontSize={19} fontWeight="bold" lineHeight="110%" my={5}>
        Your Badges
      </Text>
      <Spacer />
      <Text my={5} h={5}>
        View All
      </Text>
    </Flex>
    <Wrap spacing={10} justify="center">
      {badges.map((badge, i) => (
        <WrapItem my={2} key={i}>
          <Icon name={badge} />
        </WrapItem>
      ))}
    </Wrap>
<<<<<<< HEAD
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
        <Text my={5} h={5}>
          View All
        </Text>
      </Flex>
      <Box my={2}>{listOfBadges([1, 2, 3, 4, 5, 6, 7, 8])}</Box>
    </Box>
  );
};
=======
  </Box>
);

>>>>>>> d446cac... revised
export default Badges;
