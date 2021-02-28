import * as React from 'react';
import { Input, SimpleGrid, Box, InputGroup, InputRightElement, Flex } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import { Icon } from "../Icon" 

export default function Header() {
  const [value, setValue] = React.useState("")
  const handleChange = (event) => setValue(event.target.value)

  return (
    <Box>
      {/* <SimpleGrid columns={2} spacing="765px" w="415px" h="63px "> */}
      {/* <SimpleGrid columns={2} spacing={750} w="415px" h="63px "> */}
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
            <InputRightElement mt={3} h={3.75} w={3.75} children={<SearchIcon h={4} w={4} />}/>
          </InputGroup>
        </Box>
        <Box>
          <Box pos="absolute" left={1180} top={21}>
            <Icon name="Notification"/>
          </Box>
          <Box pos="absolute" left={1191} top={22}>
            <Icon name="RedEllipse"/>
          </Box>
        </Box>
      </Flex>
      {/* </SimpleGrid> */}
    </Box>
  )
}
