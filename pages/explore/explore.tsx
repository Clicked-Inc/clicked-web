import React from 'react';
import Header from '../../src/Components/Header';
import SideNav from '../../src/Components/SideNav';
import CardSlider from '../../src/Components/CardSlider';
import CourseCard from '../../src/Components/CourseCard';
import SectionTitle from '../../src/Components/SectionTitle';
import Tag from '../../src/Components/Tag';
import { tags } from './ExploreExperienceConstants';
import { VStack, HStack, Text, Flex, Box } from '@chakra-ui/react';

const retrieveTags = (tags) => {
  let tagsArray = [];
  tags.forEach((item, index) => {
    tagsArray.push(
      <Tag
        variant={item.variant}
        label={item.label}
        icon={item.icon}
        key={index}
      />
    );
  });
  return tagsArray;
};

const ExploreExperiences: React.FC = () => {
  return (
    <HStack alignItems="flex-start" w="100%" spacing={0} position="absolute">
      <Box position="sticky" top={0}>
        <SideNav />
      </Box>
      <Box justifyContent="flex-start" alignItems="flex-start" w="100%">
        <Box position="sticky" zIndex="sticky" top={0}>
          <Header />
        </Box>

        <Box pl={12} pt={6}>
          <SectionTitle>Featured Courses</SectionTitle>
        </Box>
        <Box w="calc(100vw - 306px)" mx={12} position="relative">
          <CardSlider
            paddingBetweenItems="0px"
            items={[
              <CourseCard key="example-card" />,
              <CourseCard key="example-card" />,
              <CourseCard key="example-card" />,
              <CourseCard key="example-card" />,
              <CourseCard key="example-card" />,
              <CourseCard key="example-card" />,
            ]}
          />
        </Box>

        <Flex pl={12} pt={12}>
          <SectionTitle>Sponsored Course</SectionTitle>
        </Flex>

        <VStack
          h={300}
          justifyContent="flex-start"
          alignItems="flex-start"
          px={16}
          py={16}
          bgColor="purple.200"
          color="white"
        >
          <Text fontWeight="extrabold" fontSize="3xl">
            Become a UX Master.
          </Text>
          <Text fontSize="md">
            The basics of user research, testing, and prototyping. An all-in-one
            course that will make you a UX master.
          </Text>
        </VStack>

        <Flex pl={12} pt={12}>
          <SectionTitle>Discover Tags</SectionTitle>
        </Flex>
        <Flex
          bgColor="gray.50"
          pl={20}
          py={4}
          alignItems="flex-start"
          flexWrap="wrap"
        >
          {retrieveTags(tags)}
        </Flex>

        <Flex pt={16} pb={40} justifyContent="center">
          <Flex flexWrap="wrap" w="100%" px={20}>
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </Flex>
        </Flex>
      </Box>
    </HStack>
  );
};

export default ExploreExperiences;
