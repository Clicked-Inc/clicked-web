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
import { StringParameterObject } from '@airtasker/spot/build/lib/src/generators/openapi2/openapi2-specification';

const FriendActivity: React.FC = () => {
  return (
    <Box>
      <Box mt={3} borderRadius="6px">
        <Box padding={2}>
          <HStack spacing="24px">
            <Icon name="ExpertOneImage" w={12} />
            <Box color="gray.500">
              Tempor nulla nunc tortor, sit eleifend porta
            </Box>
          </HStack>
        </Box>
      </Box>
      <Box mt={3} borderRadius="6px">
        <Box padding={2}>
          <HStack spacing="24px">
            <Icon name="ExpertTwoImage" w={12} />
            <Box color="gray.500">In cras sed turpis cursus eros potenti</Box>
          </HStack>
        </Box>
      </Box>
      <Box mt={3} borderRadius="6px">
        <Box padding={2}>
          <HStack spacing="24px">
            <Icon name="ExpertThreeImage" w={12} />
            <Box color="gray.500">Non at nibh mi cursus tortor</Box>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default FriendActivity;
