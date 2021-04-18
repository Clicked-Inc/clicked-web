import React, { Component }from 'react';
import { Box, FormControl, FormLabel, Input, Button, HStack, Textarea } from "@chakra-ui/react"
import { Icon } from '../Icon';

type StepThreeProps = {
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
    };  };

const Step3: React.FC<StepThreeProps> = ({ prevStep, nextStep, handleChange, values }) => {
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
                <FormControl mt={5} id="first-name">
                <FormLabel>What are some of your interests?</FormLabel>
                <Input w={1000} bg='white' value={values.interests} onChange={handleChange("interests")}/>
                </FormControl>

                <FormControl mt={5} id="first-name">
                <FormLabel>Write a short bio about yourself.</FormLabel>
                <Textarea
                    w={1000}
                    bg='white'
                    size="sm"
                    value={values.bio}
                    onChange={handleChange("bio")}
                />
                </FormControl>
                <Box marginTop={15} textAlign="center">
                    Upload a profile picture
                </Box>
                <Box marginTop={10} textAlign="right">
                    <Box mr={3}>
                        <Button onClick={previous}>Back</Button>
                        <Button onClick={next}>Complete Registration</Button>
                    </Box>        
                </Box>
                
                

            </Box>
        </Box>
    )
    
}

export default Step3;
