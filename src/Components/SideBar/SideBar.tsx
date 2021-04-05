import * as React from 'react';
import { Link, Container, VStack, Stack, Box, InputGroup, InputRightElement, Flex, Spacer } from "@chakra-ui/react"
import { Icon } from '../Icon';
import { barLabels, selectedLabel } from './SideBar.constants';


export default function SideBar() {
    const renderRow = (input: string[]) => {
        return input.map((label) => {
            let selectionRectangle;
            let color = "gray.400";
            let weight = "400";
            if(label == selectedLabel) {
                selectionRectangle = <Box position="relative" ml={-4} mr={1}><Icon  name="SideNavSelection"/></Box>;
                color = "orange.400";
                weight = "500";
            }
            return (
            <Stack position="relative" marginTop={2} marginBottom={4} paddingLeft={4} isInline>
                {selectionRectangle}
                <Link verticalAlign="center" fontSize={14} fontWeight={weight} color={color}>{label}</Link>
            </Stack>)
        })
    }
    
    return (
        <VStack position="relative" alignItems="left" h={556}>
            <Box h={40} w={214}>
                <Box position="absolute" left={68}>
                    <Icon name="SideBarProfileImage"/>
                </Box>
            </Box>
            <Box bgColor="gray.50" h={226} w={214} paddingLeft={3} paddingRight={3} paddingBottom={5} textAlign="center">
                <Box marginTop={50} fontSIze={22}><b>Team</b></Box>
                <Box fontWeight="400" fontSize={12} color="gray.400" >@teamusername</Box>
                <Box marginTop={2} fontWeight="400" fontSize={14}>Sit non turpis vitae, vitae. Ipsum venenatis, tempus cursus risus nec porttitor potenti.</Box>
            </Box>
            <Spacer />
            {renderRow(barLabels)}
        </VStack>
    )
}
