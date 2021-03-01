import React from 'react';
<<<<<<< HEAD
import { Story } from '@storybook/react';
import { Box, Text } from '@chakra-ui/react';
import Fonts from 'src/Components/Icon/Assets/Fonts';

const CoursesSummaryCard = () => {
  return (
    <Box boxShadow="md" p="6" rounded="md">
      <Text>Learn Figma - UI/UX Design</Text>
      <Text>Essential Training</Text>
=======
import { Box, Flex, Text, Spacer, Circle } from '@chakra-ui/react';
import Fonts from '../../Components/Icon/Assets/Fonts';
import { Icon } from '../Icon';

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

      <Flex boxShadow="base" p="4" rounded="md">
        <Icon name="CourseLogo"></Icon>
        <Box ml={4}>
          <Text fontWeight={600}>Learn Figma - UI/UX Design</Text>
          <Text>Essential Training</Text>
        </Box>
      </Flex>
>>>>>>> 6c22e1d... almost done
    </Box>
  );
};
export default CoursesSummaryCard;
