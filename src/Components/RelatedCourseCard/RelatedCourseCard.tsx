import React from 'react';
import {
  Box,
  Text,
  Icon as ChakraIcon,
  Stack,
  Button,
  IconButton,
  Container,
  Flex,
} from '@chakra-ui/react';
import { MdBookmark } from 'react-icons/md';
import { Icon } from '../Icon';

import StarSVG from './StarSVG';

const RelatedCourseCard = () => (
  <Flex maxW={425} h={200} rounded={6} p={2} pr={4} mr={6} bgColor="white">
    <Flex w={136} h="100%" rounded={6} bgColor="gray.200" mr={5}></Flex>
    <Flex flexDir="column" justifyContent="center">
      <Text fontSize="16px" fontWeight="semibold" pb={3}>
        Related Course Name
      </Text>
      <Text fontSize="14px" color="gray.500" pb={3}>
        A short description or summary about the course.
      </Text>
      <Flex justifyContent="space-between" pb={9}>
        <Flex>
          <StarSVG />
          <Text fontSize="12px" fontWeight="light" color="gray.500" pl={1}>
            5.0
          </Text>
        </Flex>
        <Text fontSize="12px" fontWeight="light" color="gray.500">
          6 hours
        </Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text fontSize="14px" fontWeight="semibold" color="gray.500">
          Beginner
        </Text>
        <Text fontSize="14px" fontWeight="semibold" color="gray.500">
          FREE
        </Text>
      </Flex>
    </Flex>
  </Flex>
);

export default RelatedCourseCard;
