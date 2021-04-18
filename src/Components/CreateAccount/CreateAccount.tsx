import React, { Component }from 'react';
import { HStack, Box } from "@chakra-ui/react"
import { Icon } from '../Icon';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';



export class CreateAccount extends Component {
    state = {
        step: 1,
        firstName: "",
        lastName: "",
        email: "",
        screenName: "",
        password: "",
        retypePassword: "",
        careerDevelopmentQ: "",
        aspirationsQ: "",
        interests: "",
        bio: "",
    }
 

    getSteps() {
        return ['Step 1', 'Step 2', 'Step 3'];
    }
      

    steps = this.getSteps();

    handleChange = input => e => {
        console.log([input, e.target.value])
        this.setState({[input] : e.target.value});
    }

    // proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // go back to last step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    generateStepper = (step) => {
        return (
            <Box pl={12} w={300} verticalAlign="top" height="100%">
                <Box mb={10}>
                    <Icon name="ClickedLogoLarge" />
                </Box>
                
                <Stepper activeStep={step} orientation="vertical">
                    {this.steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                        <Step key={label} {...stepProps}>
                        <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                    })}
                </Stepper>
            </Box>
            
        )
    }
    
    render() {
        const { step } = this.state;
        const { firstName, lastName, email, screenName, password, retypePassword, careerDevelopmentQ, aspirationsQ, interests, bio } = this.state;
        const values = { firstName, lastName, email, screenName, password, retypePassword, careerDevelopmentQ, aspirationsQ, interests, bio };
        
        console.log(step);
        
        switch(step) {
            case 1:
                return (
                    <HStack>
                        {this.generateStepper(step-1)}
                        <Box bg="#E5E5E5" width="100%" height="100%" py={8} px={12}>
                            <Step1 
                                prevStep={this.prevStep}
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                                values={values}
                            /> 
                        </Box>
                           
                    </HStack>
                    
                )
            case 2:
                return (
                    <HStack>
                        {this.generateStepper(step-1)}
                        <Box bg="#E5E5E5" width="100%" height="100%" py={8} px={12} >
                            <Step2 
                                prevStep={this.prevStep}
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                                values={values}
                            />    
                        </Box>
                    </HStack>
                )
            case 3:
                return (
                    <HStack>
                        {this.generateStepper(step-1)}
                        <Box bg="#E5E5E5" width="100%" height="100%" py={8} px={12}>
                            <Step3 
                                prevStep={this.prevStep}
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                                values={values}
                            />
                        </Box>    
                    </HStack>
                )
            case 4:
                return (
                    <Box>
                        { firstName }
                        { lastName }
                        { email }
                        { screenName }
                        { password }
                    </Box>
                )
        }


        return (
            <Box>
                
            </Box>
        )
    }
}

export default CreateAccount;
