import * as React from 'react';
import {
  Input,
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
    <Flex
      width="100%"
      justifyContent="space-between"
      bgColor="white"
      pb={3.5}
      boxShadow="sm"
    >
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
          <InputRightElement mt={3} h={3.75} w={3.75}>
            <SearchIcon h={4} w={4} />
          </InputRightElement>
        </InputGroup>
      </Box>
      <Box mr={6} mt={6}>
        <Box mr={5}>
          <Icon name="Notification" />
        </Box>
        <Box mt={-5} ml={2.5}>
          <Icon name="NotificationDot" />
        </Box>
      </Box>
    </Flex>
  );
}
