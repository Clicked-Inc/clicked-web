import * as React from 'react';
import {
  Input,
  SimpleGrid,
  Box,
  InputGroup,
  InputRightElement,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { Icon } from '../Icon';

export default function Header() {
  const [value, setValue] = React.useState('');
  const handleChange = (event) => setValue(event.target.value);

  return (
    <Box>
      <Flex>
        <Box mt={5} ml={10}>
          <InputGroup w={380}>
            <Input
              variant="flushed"
              value={value}
              onChange={handleChange}
              placeholder="Discover experiences, courses, and discussions"
              size="sm"
              fontSize={14}
            />
            <InputRightElement
              mt={3}
              h={3.75}
              w={3.75}
              children={<SearchIcon h={4} w={4} />}
            />
          </InputGroup>
        </Box>
        
        <Box pl={600} mr={40} mt={6}>
          <Box mr={5}>
            <Icon name="Notification" />
          </Box>
          <Box mt={-5} ml={2.5}>
            <Icon name="NotificationDot" />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
