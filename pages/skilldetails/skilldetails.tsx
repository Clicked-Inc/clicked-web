import React from 'react';
import { VStack, HStack, Text, Flex, Box, Button } from '@chakra-ui/react';
import SideNav from '@Components/SideNav';
import Header from '@Components/Header';
import { BsArrowLeft } from 'react-icons/Bs';

const skilldetails: React.FC = () => {
  return (
    <HStack alignItems="flex-start" w="100%" spacing={0} position="absolute">
      <Box position="sticky" top={0}>
        <SideNav />
      </Box>
      <Box justifyContent="flex-start" alignItems="flex-start" w="100%">
        <Box position="sticky" zIndex="sticky" top={0}>
          <Header />
        </Box>
        <Flex p={12}>
          <Flex>
            <BsArrowLeft color="gray" />
            <Text fontSize="10" color="gray.500" pl={2}>
              EXPERIENCES
            </Text>
          </Flex>
        </Flex>
      </Box>
    </HStack>
  );
};

export default skilldetails;
