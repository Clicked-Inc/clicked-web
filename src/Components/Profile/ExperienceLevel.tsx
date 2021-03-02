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
        <Text fontSize={19} fontWeight="bold" lineHeight="110%" my={5}>
          Explorer
        </Text>
        <Spacer />
        <Badge
          textTransform="none"
          colorScheme="blackAlpha"
          variant="solid"
          rounded={10}
          my={5}
          h={5}
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
