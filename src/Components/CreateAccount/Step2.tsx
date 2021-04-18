import React, { Component }from 'react';
import { Box, FormControl, FormLabel, Input, Button, HStack, Select } from "@chakra-ui/react"
import { Icon } from '../Icon';

type StepTwoProps = {
    prevStep: Function;
    nextStep: Function;
    handleChange: Function;
    values: { 
        firstName: string; 
        lastName: string; 
        email: string; 
        screenName: string; 
        password: string; 
        retypePassword: string;
        careerDevelopmentQ: string;
        aspirationsQ: string;
        interests: string;
        bio: string;
    };
};

const Step2: React.FC<StepTwoProps> = ({ prevStep, nextStep, handleChange, values }) => {
    function previous(e) {
        prevStep();
    }
    
    function next() {
        nextStep();
    }

    return (
        <Box>
            <Box  mb={10} fontWeight="700" fontSize={36}>Create Account</Box>

            <Box>
                <FormControl mt={5} id="careerDevelopmentQ">
                <FormLabel>Which of the following describes where you are in your career development?</FormLabel>
                <Select bg='white' onChange={handleChange("careerDevelopmentQ")} value={values.careerDevelopmentQ} placeholder="Select option">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </Select>
                </FormControl>

                <FormControl mt={5} id="aspirationsQ">
                <FormLabel>What are some of your aspirations?</FormLabel>
                <Select bg='white' onChange={handleChange("aspirationsQ")} value={values.aspirationsQ} placeholder="Select option">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </Select>
                </FormControl>
                <Box marginTop={10} textAlign="right">
                        <Box mr={3}>
                            <Button onClick={previous}>Back</Button>
                            <Button onClick={next}>Continue</Button>
                        </Box>
                            
                        
                        
                </Box>
                
                

            </Box>
        </Box>
    )
    
}

export default Step2;
