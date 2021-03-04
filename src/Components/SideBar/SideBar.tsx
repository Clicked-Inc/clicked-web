import * as React from 'react';
import { Link, Container, VStack, SimpleGrid, Box, InputGroup, InputRightElement, Flex, Spacer } from "@chakra-ui/react"
import { Icon } from "../Icon" 

export default function SideBar() {
    return (
        <VStack w={195} l={2754}>
            <Box>
                <Icon name="ClickedLogo"/>
            </Box>
            <Box position="relative">
                <Icon name="SideBarOrangeRectangle"/>
                <Box fontSize={14} fontWeight="bold" fontStyle="Rubik" color="white" position="absolute" ml={8} top={3} >Emma Myers</Box>
                <Box fontSize={12} fontWeight="normal" fontStyle="Rubik" color="white" position="absolute" ml={8} top={8} >@emmamyers</Box>

            </Box>
            <Spacer/>
            <Spacer/>
            <Container fontSize={10} fontStyle="Rubik" color="#B3B0BC">COMMUNITY</Container>
            <Box>
                <Link fontSize={14} fontStyle="Rubik" color="#7C788A">Dashboard</Link>
            </Box>
            <Box>
                <Link fontSize={14} fontWeight="normal" fontStyle="Rubik" color="#7C788A">Experiences</Link>
            </Box>
            <Box>
                <Link fontSize={14} fontWeight="normal" fontStyle="Rubik" color="#7C788A">All Courses</Link>
            </Box>
            <Box>
                <Link fontSize={14} fontWeight="normal" fontStyle="Rubik" color="#7C788A">Feed</Link>
            </Box>
            <Box>
                <Link fontSize={14} fontWeight="normal" fontStyle="Rubik" color="#7C788A">Inspiration</Link>
            </Box>
        </VStack>
    )
}