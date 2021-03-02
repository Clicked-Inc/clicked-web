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
import { Icon } from '../Icon';

const CoursesSummaryCard = () => (
  <Box>
    <Flex isInline>
      <Text fontSize={19} fontWeight="bold" lineHeight="110%" my={5}>
        Courses
      </Text>
      <Spacer />
      <Circle size={6} bg="red.400" color="white" my={5} h={5}>
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
  </Box>
);

<<<<<<< HEAD
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
=======
>>>>>>> d446cac... revised
export default CoursesSummaryCard;
