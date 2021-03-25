import * as React from 'react';
import { Link, Container, VStack, Stack, Box, InputGroup, InputRightElement, Flex, Spacer } from "@chakra-ui/react"
import { Icon } from '../Icon';


export default function SideNav() {
    var topLabels = [["Dashboard", <Icon name="IconDashboard"/>, true], ["Experiences", <Icon name="IconExperiences"/>, false], ["All Courses", <Icon name="IconCourses"/>, false], ["Feed", <Icon name="IconFeed"/>, false], ["Inspiration", <Icon name="IconInpsiration"/>, false]]
    var bottomLabels = [["Guide", <Icon name="IconGuide"/>, false], ["FAQs", <Icon name="IconFAQ"/>, false], ["Contact Us", <Icon name="IconContact"/>, false]];
    const renderRow = (input) => {
        return input.map((label) => {
            let selection;
            if(label[2] == true) {
                selection = <Box position="relative" ml={-4} mr={1}><Icon  name="SideNavSelection"/></Box>;
            }
            return (
            <Stack position="relative" marginTop={2} marginBottom={5} paddingLeft={4} isInline>
                {selection}
                {label[1]}                    
                <Link verticalAlign="center" fontSize={14} fontWeight="normal" fontStyle="Rubik" color="#7C788A">{label[0]}</Link>

            </Stack>)
        })
    }
    
    return (
        <VStack alignItems="left" w={195} l={2754}>
            <Container marginLeft={1.5} marginTop={6} marginRight={6.4375} marginBottom={6}>
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
