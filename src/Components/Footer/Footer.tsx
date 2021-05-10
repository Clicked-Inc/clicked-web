import React from 'react';
import { Flex, Text, Link } from '@chakra-ui/react';
import { FooterLinks } from './Footer.constants';
import CopyrightSVG from './CopyrightSVG';

const Footer: React.FC = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems={{ base: 'flex-end', md: 'center' }}
      w="100%"
      bgColor="gray.100"
      px={12}
      py={4}
    >
      <Flex flexDir={{ base: 'column', md: 'row' }}>
        {FooterLinks.map((item, index) => {
          return (
            <Link to={item.link} key={item.name} pr={4} pt={{ base: 1, md: 0 }}>
              <Text fontSize="sm">{item.name}</Text>
            </Link>
          );
        })}
      </Flex>
      <Flex alignItems="center">
        <CopyrightSVG />
        <Text pl={2} fontSize="sm">
          2020 Clicked. All Rights Reserved.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
