<<<<<<< HEAD
import * as React from 'react';
import { Input, SimpleGrid, Box, InputGroup, InputRightElement, Flex, Spacer } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import { Icon } from "../Icon" 

export default function Header() {
=======
import { Input, SimpleGrid, Box } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import { InputGroup, InputRightElement } from "@chakra-ui/input"
import { Icon } from "../Icon" 
import * as React from 'react';

export default function Header({ task: { id, title, state }, onArchiveTask, onPinTask }) {
>>>>>>> 575ed7d... [V1-32] Almost done with Icons
  const [value, setValue] = React.useState("")
  const handleChange = (event) => setValue(event.target.value)

  return (
<<<<<<< HEAD
    <Box>
      <Flex>
        <Box mt={5} ml={10}>
          <InputGroup w={380}>
=======
    <div>
      <SimpleGrid columns={2} spacing="830px" w="415px" h="63px">
        <Box mt="15px" ml= "48px">
          <InputGroup w="22.9rem">
>>>>>>> 575ed7d... [V1-32] Almost done with Icons
            <Input
              variant="flushed"
              value={value}
              onChange={handleChange}
              placeholder="Discover experiences, courses, and discussions"
              size="sm"
<<<<<<< HEAD
              fontSize={14}
            />
            <InputRightElement mt={3} h={3.75} w={3.75} children={<SearchIcon h={4} w={4} />}/>
          </InputGroup>
        </Box>
        <Spacer/>
        <Box mr={40} mt={6}>
          <Box mr={5}>
            <Icon name="Notification"/>
          </Box>
          <Box mt={-5} ml={2.5}>
            <Icon name="NotificationDot"/>
          </Box>
        </Box>
      </Flex>
    </Box>
=======
              fontSize="14px"
              // marginLeft="9px"
            />
            <InputRightElement mt="9px" h="14px" w="14px" children={<SearchIcon h="14px" w="14px" />}></InputRightElement>
          </InputGroup>
        </Box>
        <div>
          <Icon name="Notification"></Icon>
        </div>
      </SimpleGrid>
    </div>
>>>>>>> 575ed7d... [V1-32] Almost done with Icons
  )
}
