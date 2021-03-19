import React from 'react';
import {
  Box,
  Text,
  ChakraIcon,
  Stack,
  Button,
  IconButton,
  Container,
} from '@chakra-ui/react';
import { MdBookmark } from 'react-icons/md';
import { Icon } from '../Icon';

const CourseCard = () => (
  <Box maxW={321} h={450} boxShadow="md" rounded={10}>
    <Box spacing={10} minW="100%" h={200} objectFit="cover">
      <Box>
        <Icon
          name="CourseCardCover"
          alt="Course Card Cover"
          maxW="100%"
          h={200}
        />
      </Box>
      <Button
        variant="solid"
        colorScheme="whiteAlpha"
        color="black"
        rounded="full"
        h={7}
        px={2}
        my={3}
        bottom={190}
        left={3}
      >
        Tag Name
      </Button>
      <IconButton
        variant="outline"
        colorScheme="orange"
        rounded="full"
        aria-label="Bookmark"
        icon={<ChakraIcon as={MdBookmark} transform="scale(2)" />}
        float="right"
        bottom={180}
        right={3}
      />
    </Box>
    <Container>
      <Box p={3} mb={3}>
        <Text as="h2" fontWeight="bold" fontSize="2xl" my={2} noOfLines={1}>
          Course Title
        </Text>
        <Text fontSize="md" color="gray.500" letterSpacing="wide">
          Instructor Name
        </Text>
        <Text noOfLines={2} fontWeight="light" fontSize="md">
          Course Description Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </Text>
        <Button
          variant="solid"
          color="white"
          colorScheme="orange"
          rounded="full"
          h={7}
          px={2}
          my={3}
        >
          Course Tag
        </Button>
        <Stack
          isInline
          fontWeight="semibold"
          fontSize="lg"
          justifyContent="space-between"
        >
          <Text>0h 0m</Text>
          <Text>$0.00 </Text>
        </Stack>
      </Box>
    </Container>
  </Box>
);

export default CourseCard;
