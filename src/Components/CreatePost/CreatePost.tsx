import React from 'react';
import {
  Box,
  Icon as ChakraIcon,
  HStack,
  Button,
  Image,
  Flex,
  Textarea,
} from '@chakra-ui/react';
import { AttachmentIcon, AtSignIcon } from '@chakra-ui/icons';
import { Icon } from '../Icon';

const CreatePost = () => (
  <>
    <Box boxShadow="lg" w={700}>
      <HStack pr={5}>
        <Image
          borderRadius="full"
          p={5}
          objectFit="cover"
          src="https://bit.ly/sage-adebayo"
          alt="Profile Pic"
          boxSize={100}
        />
        <Textarea
          pt={5}
          placeholder="What do you want to discuss with your team?"
          variant="unstyled"
        ></Textarea>
        <Box transform="scale(1.2)">
          <Icon name="SmileyIcon" />
        </Box>
      </HStack>
      <Box p={3} backgroundColor="gray.50">
        <HStack spacing={30} justifyContent="space-between">
          <Flex ml={4}>
            <Box transform="scale(1.5)" pt={1}>
              <Icon name="ImageIcon" />
            </Box>
            <ChakraIcon
              as={AttachmentIcon}
              ml={7}
              w={7}
              h={6}
              mr={5}
              color="black"
            ></ChakraIcon>
            <ChakraIcon as={AtSignIcon} w={7} h={6} color="black"></ChakraIcon>
          </Flex>
          <Button w={100} p={5} backgroundColor="orange.500" color="white">
            Post
          </Button>
        </HStack>
      </Box>
    </Box>
  </>
);

export default CreatePost;
