import * as React from 'react';
import { Link, Container, VStack, Stack, Box, InputGroup, InputRightElement, Flex, Spacer } from "@chakra-ui/react"
import { Icon, IconNames } from '../Icon';


export default function SideNav() {
    var topLabels = [["Dashboard", <Icon name="IconDashboard"/>], ["Experiences", <Icon name="IconExperiences"/>], ["All Courses", <Icon name="IconCourses"/>], ["Feed", <Icon name="IconFeed"/>], ["Inspiration", <Icon name="IconInpsiration"/>]]
    var bottomLabels = [["IconGuide", <Icon name="IconGuide"/>], ["IconFAQ", <Icon name="IconFAQ"/>], ["IconContact", <Icon name="IconContact"/>]];
    const renderRow = (input) => {
        return input.map((label) => {
            return (
            <Stack marginTop={2} marginBottom={5} paddingLeft={4} isInline>
                {label[1]}
                <Link fontSize={14} fontWeight="normal" fontStyle="Rubik" color="#7C788A">{label[0]}</Link>
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
                <Box fontSize={14} fontWeight="bold" fontStyle="Rubik" color="white" position="absolute" ml={8} top={3} >Emma Myers</Box>
                <Box fontSize={12} fontWeight="normal" fontStyle="Rubik" color="white" position="absolute" ml={8} top={8} >@emmamyers</Box>
            </Box>
            <Spacer/>
            <Spacer/>
            <Container fontSize={10} fontStyle="Rubik" color="#B3B0BC">COMMUNITY</Container>
            {renderRow(topLabels)}
            <Spacer/>
            <Container fontSize={10} fontStyle="Rubik" color="#B3B0BC">HELP</Container>
            {renderRow(bottomLabels)}
        </VStack>
    )
}