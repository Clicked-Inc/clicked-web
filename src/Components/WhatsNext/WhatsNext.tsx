import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import {
  Box,
  Text,
  Icon,
  Center,
  Button,
  IconButton,
  Container,
  Circle,
  HStack,
} from '@chakra-ui/react';

const WhatsNext = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Box maxW={800}>
      <Text color="gray.900" fontWeight="700" fontSize="20px" mb={8}>
        What's next?
      </Text>
      <Box mt={4} position="relative">
        <Text maxH={isExpanded ? 'auto' : 20} h="100%" noOfLines={2}>
          <Box background="white" mb={8} ml={10} p={5} pl={0}>
            <HStack>
              <Circle
                mr={5}
                bg="orange.400"
                fontSize={20}
                ml={-5}
                size={10}
                color="white"
              >
                1
              </Circle>{' '}
              <Box>
                <Text color="gray.900" fontWeight="700" fontSize="20px">
                  Faucibus volutpat, ac tortor, volutpat sit quis ante amet.{' '}
                </Text>
                <Text noOfLines={2}>
                  Nulla vitae quam elit, mauris id sit. Cum scelerisque
                  ridiculus magna ultrices enim nisl platea libero. Ut blandit
                  amet leo et dolor nunc aliquet. amet leo et dolor nunc
                  aliquet. amet leo et dolor nunc aliquet. amet leo et dolor
                  nunc aliquet. amet leo et dolor nunc aliquet. amet leo et
                  dolor nunc aliquet.
                </Text>
              </Box>
            </HStack>
          </Box>
          <Box background="white" mb={8} ml={10} p={5} pl={0}>
            <HStack>
              <Circle
                mr={5}
                bg="orange.400"
                fontSize={20}
                ml={-5}
                size={10}
                color="white"
              >
                1
              </Circle>{' '}
              <Box>
                <Text color="gray.900" fontWeight="700" fontSize="20px">
                  Faucibus volutpat, ac tortor, volutpat sit quis ante amet.{' '}
                </Text>
                <Text noOfLines={2}>
                  Nulla vitae quam elit, mauris id sit. Cum scelerisque
                  ridiculus magna ultrices enim nisl platea libero. Ut blandit
                  amet leo et dolor nunc aliquet. amet leo et dolor nunc
                  aliquet. amet leo et dolor nunc aliquet. amet leo et dolor
                  nunc aliquet. amet leo et dolor nunc aliquet. amet leo et
                  dolor nunc aliquet.
                </Text>
              </Box>
            </HStack>
          </Box>
          <Box background="white" mb={8} ml={10} p={5} pl={0}>
            <HStack>
              <Circle
                mr={5}
                bg="orange.400"
                fontSize={20}
                ml={-5}
                size={10}
                color="white"
              >
                1
              </Circle>{' '}
              <Box>
                <Text color="gray.900" fontWeight="700" fontSize="20px">
                  Faucibus volutpat, ac tortor, volutpat sit quis ante amet.{' '}
                </Text>
                <Text noOfLines={2}>
                  Nulla vitae quam elit, mauris id sit. Cum scelerisque
                  ridiculus magna ultrices enim nisl platea libero. Ut blandit
                  amet leo et dolor nunc aliquet. amet leo et dolor nunc
                  aliquet. amet leo et dolor nunc aliquet. amet leo et dolor
                  nunc aliquet. amet leo et dolor nunc aliquet. amet leo et
                  dolor nunc aliquet.
                </Text>
              </Box>
            </HStack>
          </Box>
        </Text>
        {!isExpanded && (
          <Box
            top="0"
            position="absolute"
            h="100%"
            w="100%"
            bgGradient="linear(to-t, rgb(255,255,255,0.9), rgba(0,0,0,0))"
          />
        )}
      </Box>
      <Center>
        <Button
          d="flex"
          leftIcon={isExpanded ? <FiChevronUp /> : <FiChevronDown />}
          variant="unstyled"
          color="black"
          fontSize="xs"
          fontWeight="400"
          onClick={() => setIsExpanded((value) => !value)}
        >
          {isExpanded ? 'SHOW LESS' : 'EXPAND'}
        </Button>
      </Center>
    </Box>
  );
};

export default WhatsNext;
