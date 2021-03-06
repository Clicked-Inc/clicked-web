import React from 'react';
import { Box, Flex, Text, Spacer, Circle } from '@chakra-ui/react';
import { Icon } from '../../../Icon';

const CoursesSummaryCard = () => (
  <Box>
    <Flex isInline>
      <Text textStyle="Header1">Courses</Text>
      <Spacer />
      <Circle size={6} bg="red.400" color="white" fontWeight="bold" my={5}>
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

export default CoursesSummaryCard;
