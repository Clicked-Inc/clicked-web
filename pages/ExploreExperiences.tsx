import React from 'react';
import Header from '../src/Components/Header';
import SideNav from '../src/Components/SideNav';
import CourseCard from '../src/Components/CourseCard';
import SectionTitle from '../src/Components/SectionTitle';
import Tag from '../src/Components/Tag';
import { tags, tags2 } from './ExploreExperienceConstants';
import {
  Grid,
  GridItem,
  VStack,
  HStack,
  Text,
  Box,
  Flex,
} from '@chakra-ui/react';

const retrieveTags = (tags) => {
  let tagsArray = [];
  tags.forEach((item, index) => {
    tagsArray.push(
      <Tag variant={item.variant} label={item.label} icon={item.icon} />
    );
  });
  return tagsArray;
};

const ExploreExperiences: React.FC = () => {
  return (
    <HStack alignItems="flex-start" spacing={0}>
      <Flex position="fixed">
        <SideNav />
      </Flex>
      <VStack
        justifyContent="flex-start"
        alignItems="flex-start"
        pl={195}
        pr={-195}
        w="100vw"
      >
        <VStack position="fixed" justifyContent="center" zIndex={9999}>
          <Header />
        </VStack>
        <VStack alignItems="flex-start" paddingLeft="3rem" paddingTop="4rem">
          <SectionTitle>Featured Courses</SectionTitle>
          <HStack spacing={6}>
            <CourseCard />
            <CourseCard />
            <CourseCard />
            {/* <CourseCard /> */}
          </HStack>
        </VStack>
        <Flex paddingLeft="3rem" paddingTop="3rem">
          <SectionTitle>Sponsored Course</SectionTitle>
        </Flex>

        <VStack
          w="100%"
          h={300}
          justifyContent="flex-start"
          alignItems="flex-start"
          padding="4rem 4rem"
          bgColor="#9C878E"
          color="#fff"
        >
          <Text fontWeight="extrabold" fontSize="3xl">
            Become a UX Master.
          </Text>
          <Text fontSize="md" w="30%">
            The basics of user research, testing, and prototyping. An all-in-one
            course that will make you a UX master.
          </Text>
        </VStack>
        <Flex paddingLeft="3rem" paddingTop="3rem">
          <SectionTitle>Discover Tags</SectionTitle>
        </Flex>
        <VStack
          bgColor="#f8f8f8"
          width="100%"
          paddingLeft="5rem"
          paddingY="1rem"
          alignItems="flex-start"
        >
          <HStack>{retrieveTags(tags)}</HStack>
          <HStack>{retrieveTags(tags2)}</HStack>
        </VStack>

        <Flex pl="4rem" pt="4rem" pb="10rem">
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </Grid>
        </Flex>
      </VStack>
    </HStack>
  );
};

export default ExploreExperiences;
