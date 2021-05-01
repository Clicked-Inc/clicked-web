import * as React from 'react';
import {
  Link,
  Container,
  HStack,
  Stack,
  Box,
  InputGroup,
  InputRightElement,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import { Icon } from '../Icon';

export default function ExpertsSection() {
  return (
    <Box>
      <Box color="gray.900" fontWeight="700" fontSize="20px">
        Experts here to help
      </Box>
      <Box mt={5} h={100} w={620} borderRadius="6px">
        <Box padding={5}>
          <HStack spacing="24px">
            <Icon name="ExpertOneImage" />
            <Box>
              <Box color="gray.800" fontWeight="500" fontSize="16px">
                Marcus Cheng
              </Box>
              <Box color="gray.400">
                Tempor nulla nunc tortor, sit eleifend porta
              </Box>
            </Box>
          </HStack>
        </Box>
      </Box>
      <Box mt={5} h={100} w={620} borderRadius="6px">
        <Box padding={5}>
          <HStack spacing="24px">
            <Icon name="ExpertTwoImage" />
            <Box>
              <Box color="gray.800" fontWeight="500" fontSize="16px">
                Emily Kingston
              </Box>
              <Box color="gray.400">In cras sed turpis cursus eros potenti</Box>
            </Box>
            <Spacer />
            <Box display="flex" justify>
              <Box
                px={5}
                py={1}
                borderRadius="8px"
                bg="orange.400"
                fontWeight="600"
              >
                <Box color="white" fontSize="14px">
                  Project Manager
                </Box>
              </Box>
            </Box>
          </HStack>
        </Box>
      </Box>
      <Box mt={5} h={100} w={620} borderRadius="6px">
        <Box padding={5}>
          <HStack spacing="24px">
            <Icon name="ExpertThreeImage" />
            <Box>
              <Box color="gray.800" fontWeight="500" fontSize="16px">
                Jackie Chan
              </Box>
              <Box color="gray.400">Non at nibh mi cursus tortor</Box>
            </Box>
            <Spacer />
            <Box display="flex" justify>
              <Box
                px={5}
                py={1}
                borderRadius="8px"
                bg="orange.400"
                fontWeight="600"
              >
                <Box color="white" fontSize="14px">
                  Marketing Associate
                </Box>
              </Box>
            </Box>
          </HStack>
        </Box>
      </Box>
      <Box mt={5} h={100} w={620} borderRadius="6px">
        <Box padding={5}>
          <HStack spacing="24px">
            <Icon name="ExpertFourImage" />
            <Box>
              <Box color="gray.800" fontWeight="500" fontSize="16px">
                Norman Fernandez
              </Box>
              <Box color="gray.400">Non at nibh mi cursus tortor</Box>
            </Box>
            <Spacer />
            <Box display="flex" justify>
              <Box
                px={5}
                py={1}
                borderRadius="8px"
                bg="orange.400"
                fontWeight="600"
              >
                <Box color="white" fontSize="14px">
                  Software Engineer
                </Box>
              </Box>
            </Box>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
}
