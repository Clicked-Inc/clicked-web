import * as React from 'react';
import { Link, Container, VStack, Stack, Box, InputGroup, InputRightElement, Flex, Spacer } from "@chakra-ui/react"
import { Icon } from '../Icon';
import { topLabels, bottomLabels} from './SideNav.constants';


export default function SideNav() {
    const renderRow = (input: (string | boolean | JSX.Element)[][]) => {
        return input.map((label) => {
            let selectionRectangle;
            let color = "#7C788A";
            let weight = "400";
            if(label[2] == true) {
                selectionRectangle = <Box position="relative" ml={-4} mr={1}><Icon  name="SideNavSelection"/></Box>;
                color = "#FF6600";
                weight = "500";
            }
            return (
            <Stack position="relative" marginTop={2} marginBottom={5} paddingLeft={4} isInline>
                {selectionRectangle}
                {label[1]}                    
                <Link verticalAlign="center" fontSize={14} fontWeight={weight} fontStyle="Rubik" color={color}>{label[0]}</Link>

            </Stack>)
        })
    }
    
    return (
        <VStack alignItems="left" w={195} l={2754}>
            <Container marginLeft={1.5} marginTop={6} marginRight={6} marginBottom={6}>
                <Icon name="ClickedLogo"/>
            </Container>
            <Box position="relative">
                <Icon name="SideBarOrangeRectangle"/>
                <Box fontSize={14} fontWeight="bold" fontStyle="Rubik" color="white" ml={8} mt={-51} >Emma Myers</Box>
                <Box fontSize={12} fontWeight="normal" fontStyle="Rubik" color="white" ml={8} mb={-40} >@emmamyers</Box>
                <Box ml={173} mt={137}>
                    <Icon name="SideNavArrow"/>
                </Box>
            </Box>
            <VStack spacing={50}>
                <Spacer/>
                <Container fontSize={10} fontStyle="Rubik" color="#B3B0BC">COMMUNITY</Container>
            </VStack>
            {renderRow(topLabels)}
            <Spacer/>
            <Container fontSize={10} fontStyle="Rubik" color="#B3B0BC">HELP</Container>
            {renderRow(bottomLabels)}
        </VStack>
    )
}
