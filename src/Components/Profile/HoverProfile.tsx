import React from 'react';
import { Box, Text, Stack, Center, Image, Spacer } from '@chakra-ui/react';

import CoursesSummaryCard from './CoursesSummaryCard';
import Experiences from './Experiences';
import Badges from './Badges';
import ExperienceLevel from './ExperienceLevel';

const HoverProfile = () => (
  <Box w={400} p={10} justifyContent="center">
    <Center>
      <Image
        borderRadius="full"
        boxSize={100}
        objectFit="cover"
        src="https://bit.ly/sage-adebayo"
        alt="Profile Picture"
      />
    </Center>
    <Text
      fontSize={19}
      fontWeight="bold"
      lineHeight="110%"
      my={5}
      textAlign="center"
      mb={0}
    >
      Emma Myers
    </Text>
    <Text textAlign="center" mt={0}>
      @emmamyers
    </Text>
    <ExperienceLevel skills={[1, 2]} />
    <Badges badges={new Array(8).fill('BadgeOne')} />
    <Experiences experiences={[1, 2]} />
    <CoursesSummaryCard />
    <Stack isInline color="red.400" fontSize={20} mt={2}>
      <Text mt={5}>Go to Profile</Text>
      <Spacer />
      <Text fontSize={45}>➟</Text>
    </Stack>
  </Box>
);

export default HoverProfile;
