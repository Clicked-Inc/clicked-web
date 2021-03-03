import React from 'react';
import {
  Badge,
  Progress,
  Box,
  Text,
  Flex,
  Stack,
  Spacer,
} from '@chakra-ui/react';

const ExperienceLevel = ({ skills }) =>
  skills.map((i) => (
    <Box key={i}>
      <Flex isInline>
        <Text textStyle="h1" my={4}>
          Explorer
        </Text>
        <Spacer />
        <Badge
          textTransform="none"
          bg="gray.100"
          color="black"
          variant="solid"
          fontSize="md"
          rounded={10}
          my={3}
          h={6}
        >
          UI/UX
        </Badge>
      </Flex>
      <Progress value={60} colorScheme="orange" rounded="full" />
      <Stack isInline>
        <Text>Level 1</Text>
        <Spacer />
        <Text>
          <b>50 / 500</b> points
        </Text>
      </Stack>
    </Box>
  ));

export default ExperienceLevel;
