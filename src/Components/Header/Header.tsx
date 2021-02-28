<<<<<<< HEAD
<<<<<<< HEAD
import * as React from 'react';
import { Input, SimpleGrid, Box, InputGroup, InputRightElement, Flex, Spacer } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import { Icon } from "../Icon" 

export default function Header() {
=======
import { Input, SimpleGrid, Box } from "@chakra-ui/react"
=======
import * as React from 'react';
<<<<<<< HEAD
import { Input, SimpleGrid, Box, InputGroup, InputRightElement, Flex } from "@chakra-ui/react"
>>>>>>> 61f3229... [V1-32] Revised spacing, added Icons
=======
import { Input, SimpleGrid, Box, InputGroup, InputRightElement, Flex, Spacer } from "@chakra-ui/react"
>>>>>>> 2495692... [V1-32] Revised Stories and positioning
import { SearchIcon } from '@chakra-ui/icons'
import { Icon } from "../Icon" 

<<<<<<< HEAD
export default function Header({ task: { id, title, state }, onArchiveTask, onPinTask }) {
>>>>>>> 575ed7d... [V1-32] Almost done with Icons
=======
export default function Header() {
>>>>>>> 61f3229... [V1-32] Revised spacing, added Icons
  const [value, setValue] = React.useState("")
  const handleChange = (event) => setValue(event.target.value)

  return (
<<<<<<< HEAD
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
=======
    <Box>
      <Flex>
        <Box mt={5} ml={10}>
          <InputGroup w={380}>
>>>>>>> 61f3229... [V1-32] Revised spacing, added Icons
            <Input
              variant="flushed"
              value={value}
              onChange={handleChange}
              placeholder="Discover experiences, courses, and discussions"
              size="sm"
<<<<<<< HEAD
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
=======
              fontSize={14}
>>>>>>> 61f3229... [V1-32] Revised spacing, added Icons
            />
            <InputRightElement mt={3} h={3.75} w={3.75} children={<SearchIcon h={4} w={4} />}/>
          </InputGroup>
        </Box>
<<<<<<< HEAD
<<<<<<< HEAD
        <div>
          <Icon name="Notification"></Icon>
        </div>
      </SimpleGrid>
    </div>
>>>>>>> 575ed7d... [V1-32] Almost done with Icons
=======
        <Box>
          <Box pos="absolute" left={1180} top={21}>
=======
        <Spacer/>
        <Box mr={40} mt={6}>
          <Box mr={5}>
>>>>>>> 2495692... [V1-32] Revised Stories and positioning
            <Icon name="Notification"/>
          </Box>
          <Box mt={-5} ml={2.5}>
            <Icon name="RedEllipse"/>
          </Box>
        </Box>
      </Flex>
    </Box>
>>>>>>> 61f3229... [V1-32] Revised spacing, added Icons
  )
}
