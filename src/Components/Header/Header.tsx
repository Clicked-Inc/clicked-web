import { Input, SimpleGrid, Box } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import { InputGroup, InputRightElement } from "@chakra-ui/input"
import { Icon } from "../Icon" 
import * as React from 'react';

export default function Header({ task: { id, title, state }, onArchiveTask, onPinTask }) {
  const [value, setValue] = React.useState("")
  const handleChange = (event) => setValue(event.target.value)

  return (
    <div>
      <SimpleGrid columns={2} spacing="830px" w="415px" h="63px">
        <Box mt="15px" ml= "48px">
          <InputGroup w="22.9rem">
            <Input
              variant="flushed"
              value={value}
              onChange={handleChange}
              placeholder="Discover experiences, courses, and discussions"
              size="sm"
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
  )
}
