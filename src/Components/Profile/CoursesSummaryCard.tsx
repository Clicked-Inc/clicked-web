import React from 'react';
import { Story } from '@storybook/react';
import { Box, Text } from '@chakra-ui/react';
import Fonts from 'src/Components/Icon/Assets/Fonts';

const CoursesSummaryCard = () => {
  return (
    <Box boxShadow="md" p="6" rounded="md">
      <Text>Learn Figma - UI/UX Design</Text>
      <Text>Essential Training</Text>
    </Box>
  );
};
export default CoursesSummaryCard;
