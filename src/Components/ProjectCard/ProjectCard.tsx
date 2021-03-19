import React from 'react';
import {
  Box,
  Text,
  Icon,
  Stack,
  Button,
  IconButton,
  Container,
} from '@chakra-ui/react';
import { QuestionIcon } from '@chakra-ui/icons';
import { MdBookmark } from 'react-icons/md';
import { Icon as Icons } from '../Icon';

const ProjectCard = () => (
  <Box maxW={321} h={450} boxShadow="md" rounded={10}>
    <Box spacing={10} minW="100%" h={200} objectFit="cover">
      <Box>
        <Icons
          name="ProjectCardCover"
          alt="Project Card Cover"
          maxW="100%"
          h={200}
        />
      </Box>
      <IconButton
        variant="outline"
        colorScheme="orange"
        rounded="full"
        aria-label="Bookmark"
        icon={<Icon as={MdBookmark} transform="scale(2)" />}
        float="right"
        bottom={180}
        right={3}
      />
    </Box>
    <Container>
      <Box p={3} mb={3}>
        <Text
          textTransform="uppercase"
          fontSize="sm"
          color="gray.500"
          letterSpacing="wide"
        >
          Solo
        </Text>
        <Text as="h2" fontWeight="bold" fontSize="2xl" my={2} noOfLines={1}>
          Project Title
        </Text>
        <Text noOfLines={2} fontWeight="light" fontSize="md">
          Project Description Lorem ipsum dolor sit amet, consectetur adipiscing
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
          Project Tag
        </Button>
        <Stack isInline>
          <Text fontSize="sm" mr="35%">
            Project Type
          </Text>
          <Text fontSize="sm">Difficulty</Text>
        </Stack>
        <Stack isInline fontWeight="semibold" fontSize="lg">
          <Text mr="14%">
            Project Type
            <QuestionIcon ml={3} color="red.400" />
          </Text>
          <Text> Difficulty</Text>
        </Stack>
      </Box>
    </Container>
  </Box>
);

export default ProjectCard;
