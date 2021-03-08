import React from 'react';
import { Wrap, WrapItem, Box, Text, Flex, Spacer } from '@chakra-ui/react';
import { Icon } from '../../../Icon';

const Badges = ({ badges }) => (
  <Box mb={3}>
    <Flex isInline>
      <Text textStyle="Header1">Your Badges</Text>
      <Spacer />
      <Text my={5} fontSize="md">
        View All
      </Text>
    </Flex>
    <Wrap mt={2} spacing={10} justify="center">
      {badges.map((badge, i) => (
        <WrapItem my={2} key={`badges-${badge}-${i}`}>
          <Icon name={badge} />
        </WrapItem>
      ))}
    </Wrap>
  </Box>
);

export default Badges;
