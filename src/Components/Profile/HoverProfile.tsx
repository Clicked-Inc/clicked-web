import React from 'react';
import { Box, Text, Stack, Center, Image, Spacer } from '@chakra-ui/react';

import CoursesSummaryCard from './CoursesSummaryCard';
import Experiences from './Experiences';
import Badges from './Badges';
import ExperienceLevel from './ExperienceLevel';
import Fonts from '../../Components/Icon/Assets/Fonts';

const HoverProfile = () => {
  return (
    <Box w="400px" p={10} justifyContent="center">
      <Center>
        <Image
          borderRadius="full"
          boxSize="100px"
          objectFit="cover"
          src="https://bit.ly/sage-adebayo"
          alt="Profile Picture"
        />
      </Center>
      <Text theme={Fonts} textStyle="h1" textAlign="center" mb={0}>
        Emma Myers
      </Text>
      <Text textAlign="center" mt={0}>
        @emmamyers
      </Text>
      <ExperienceLevel />
      <Badges />
      <Experiences />
      <CoursesSummaryCard />
      <Stack isInline color="tomato" fontSize={20} mt={2}>
        <Text mt={5}>Go to Profile</Text>
        <Spacer />
        <Text fontSize={45}>➟</Text>
      </Stack>
    </Box>
  );
};

export default HoverProfile;
