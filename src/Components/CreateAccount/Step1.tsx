import React, { Component }from 'react';
import { Box, HStack, VStack, FormControl, FormLabel, Input, Button, Spacer } from "@chakra-ui/react"
import { Icon } from '../Icon';
import TextField from '@material-ui/core/TextField';


type StepOneProps = {
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

const Step1: React.FC<StepOneProps> = ({ prevStep, nextStep, handleChange, values }) => {
    function next(e) {
        nextStep();
    }

    function validateForm(value) {
        let error
        if (!value) {
          error = "Name is required"
        } else if (value.toLowerCase() !== "naruto") {
          error = "Jeez! You're not a fan 😱"
        }
        return error
      }

    return (
        <Box>
            <Box mb={10} fontWeight="700" fontSize={36}>Create Account</Box>
            <Box>
                <VStack spacing={10}>
                    <HStack spacing={100}>
                        <FormControl id="firstName">
                        <FormLabel>First Name</FormLabel>
                        <Input w={438} bg='white' defaultValue={values.firstName} onChange={handleChange("firstName")}  />
                        </FormControl>

                        <FormControl id="lastName">
                        <FormLabel>Last Name</FormLabel>
                        <Input w={438} bg='white' defaultValue={values.lastName} onChange={handleChange("lastName")} />
                        </FormControl>`
                    </HStack>
                    <HStack spacing={100}>
                        <FormControl id="email">
                        <FormLabel>Email</FormLabel>
                        <Input w={438} bg='white' defaultValue={values.email} onChange={handleChange("email")} />
                        </FormControl>

                        <FormControl id="screenName">
                        <FormLabel>Screen Name</FormLabel>
                        <Input w={438} bg='white' defaultValue={values.screenName} onChange={handleChange("screenName")}/>
                        </FormControl>
                    </HStack>
                    <HStack spacing={100}>
                        <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input type="password" w={438} bg='white' defaultValue={values.password} onChange={handleChange("password")}/>
                        </FormControl>

                        <FormControl id="retypePassword">
                        <FormLabel>Re-Enter Password</FormLabel>
                        <Input type="password" w={438} bg='white' defaultValue={values.retypePassword} onChange={handleChange("retypePassword")} />
                        </FormControl>
                    </HStack>
                </VStack>

                <Box marginTop={10} textAlign="right">
                    <Button onClick={next}>Continue</Button>
                </Box>
                
            </Box>
        </Box>
    )
    
}

export default Step1;
