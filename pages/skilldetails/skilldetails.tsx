import React from 'react';
import { VStack, HStack, Text, Flex, Box, Button } from '@chakra-ui/react';
import SideNav from '@Components/SideNav';
import Header from '@Components/Header';
import { BsArrowLeft } from 'react-icons/Bs';
import PrimaryButton from '@Components/PrimaryButton';
import CardSlider from '@Components/CardSlider';
import CourseCard from '@Components/CourseCard';
import SectionTitle from '@Components/SectionTitle';
import ExpertsSection from '@Components/ExpertsSection';
import FriendActivity from '@Components/FriendActivity';
import Footer from '@Components/Footer';
import RelatedCourseCardStories from '@Components/RelatedCourseCard/RelatedCourseCard.stories';
import RelatedCourseCard from '@Components/RelatedCourseCard';

const skilldetails: React.FC = () => {
  return (
    <HStack alignItems="flex-start" w="100%" spacing={0} position="absolute">
      <Box position="sticky" top={0}>
        <SideNav />
      </Box>
      <Box
        justifyContent="flex-start"
        alignItems="flex-start"
        w="100%"
        bgColor="#FBFBFB"
      >
        <Box position="sticky" zIndex="sticky" top={0}>
          <Header />
        </Box>
        <Flex p={12} flexDir="column">
          <Flex>
            <BsArrowLeft color="gray" />
            <Text fontSize="10" color="gray.500" pl={2}>
              EXPERIENCES
            </Text>
          </Flex>
          <Flex flexDir="column" py={20} px={10}>
            <Text fontSize="36px" fontWeight="extrabold" pb="27px">
              Name of Skill
            </Text>
            <Text color="gray.500" fontSize="14px" pb="32px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              iaculis rhoncus sapien eget imperdiet. Aliquam vitae lorem et
              dolor placerat bibendum sit amet ac mauris. Donec tristique lacus
              sed aliquet pharetra. Donec bibendum tincidunt leo, at facilisis
              lorem varius ut. Ut augue massa, blandit sit amet augue et, congue
              placerat metus. Pellentesque arcu risus, lacinia a erat in,
              interdum facilisis elit. Etiam vitae convallis elit. Maecenas
              risus neque, aliquet nec nulla sodales, dapibus malesuada nisi.
              Curabitur et aliquam justo. Nullam id pellentesque diam. Sed
              tristique elementum eros non auctor. Cras id ante nec nibh mollis
              egestas in a lectus. Donec nec molestie velit.
            </Text>
            <Flex w="200px">
              <PrimaryButton variant="large" text="Interest Level" />
            </Flex>
          </Flex>
        </Flex>
        <Box pl={12} pt={6}>
          <SectionTitle>Featured Courses</SectionTitle>
        </Box>
        <Box w="calc(100vw - 306px)" mx={12} mb={8} position="relative">
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
        <Flex flexDir="row" justifyContent="space-between" px={12} mb={20}>
          <Box pt={6}>
            <SectionTitle>Featured Coaches</SectionTitle>
            <ExpertsSection hideTitle={true} />
          </Box>
          <Box pt={6}>
            <SectionTitle>Friend Activity</SectionTitle>
            <FriendActivity />
          </Box>
        </Flex>
        <Flex
          ml={4}
          mt={10}
          mb={40}
          bgColor="gray.100"
          pl={8}
          py={8}
          flexDir="column"
          alignItems="start"
        >
          <Text fontSize="22px" fontWeight="semibold" pb={6}>
            Related Courses
          </Text>
          <Box w="calc(100vw - 275px)" position="relative">
            <CardSlider
              paddingBetweenItems="0px"
              items={[
                <RelatedCourseCard />,
                <RelatedCourseCard />,
                <RelatedCourseCard />,
                <RelatedCourseCard />,
              ]}
            />
          </Box>
        </Flex>
        <Footer />
      </Box>
    </HStack>
  );
};

export default skilldetails;
