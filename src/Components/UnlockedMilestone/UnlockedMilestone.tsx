import React from 'react';
import { Icon } from '../Icon';
import { Box, Center } from '@chakra-ui/react';
import PrimaryButton from '@Internal/Components/PrimaryButton';

const UnlockedMilestone = () => (
  <Box maxW={689} h={206} shadow="lg" textAlign="center" p={15}>
    <Center m={4}>
      <Icon name="MilestoneFlag" />
    </Center>
    <Center fontSize="lg">
      <b>//Team Member// has unlocked Milestone 5: Name of Milestone</b>
    </Center>
    <Center color="grey"> November 13, 2020 | 12:06 PM</Center>
    <Center mt={4}>
      <PrimaryButton variant="large" text="View Milestone 5"></PrimaryButton>
    </Center>
  </Box>
);

export default UnlockedMilestone;
