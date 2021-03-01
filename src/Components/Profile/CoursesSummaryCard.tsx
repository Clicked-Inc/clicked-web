import React from 'react';
import { Box, Flex, Text, Spacer, Circle } from '@chakra-ui/react';
import Fonts from '../../Components/Icon/Assets/Fonts';

const CoursesSummaryCard = () => {
  return (
    <Box>
      <Flex isInline>
        <Text theme={Fonts} textStyle="h1">
          Courses
        </Text>
        <Spacer />
        <Circle size={6} bg="tomato" color="white" my={5} h={5}>
          2
        </Circle>
      </Flex>
      <Box boxShadow="base" p="4" rounded="md">
        <Text>Learn Figma - UI/UX Design</Text>
        <Text>Essential Training</Text>
      </Box>
    </Box>
  );
};
export default CoursesSummaryCard;
