import React, { Component, useState } from 'react';
import { HStack, Box, Grid } from '@chakra-ui/react';
import { Icon } from '../Icon';
import axios from 'axios';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const CreateAccount = () => {
  const [inputs, setInputs] = useState({
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    screenName: '',
    password: '',
    retypePassword: '',
    careerDevelopmentQ: '',
    aspirationsQ: '',
    interests: '',
    bio: '',
  });

  function getSteps() {
    return ['Step 1', 'Step 2', 'Step 3'];
  }
  const steps = getSteps();

  const handleChange = (input) => (e) => {
    setInputs((prev) => ({ ...prev, [input]: e.target.value }));
  };

  // proceed to next step
  function nextStep() {
    setInputs((prev) => ({ ...prev, ['step']: inputs.step + 1 }));
  }

  // go back to last step
  function prevStep() {
    setInputs((prev) => ({ ...prev, ['step']: inputs.step - 1 }));
  }

  function generateStepper(step) {
    return (
      <Box pl={12} w={300} verticalAlign="top" height="100%">
        <Box mb={10} pt={8}>
          <Icon name="ClickedLogoLarge" />
        </Box>

        <Stepper activeStep={step} orientation="vertical">
          {steps.map((label, index) => {
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
    );
  }

  function handleUserSubmit() {
    console.log('run handleUserSubmit');
    let {
      firstName,
      lastName,
      email,
      screenName,
      password,
      retypePassword,
      careerDevelopmentQ,
      aspirationsQ,
      interests,
      bio,
    } = inputs;
    const role = 'student';
    const interestsArray = ['running', 'cooking'];
    // convert strings to an array
    // 
    const username = screenName;
    event.preventDefault();
    // setIsLoading(true);
    axios
      .post(`http://localhost:3000/api/user/register`, {
        email,
        username: screenName,
        role,
        password,
        firstName,
        lastName,
        aspirationType: aspirationsQ.toLowerCase(),
        skillInterests: interestsArray,
      })
      .then((res) => {
        localStorage.setItem('authToken', res.data.authToken);
        window.location.reload();
        console.log('Success');

        // setIsLoggedIn(true);
        // setIsLoading(false);
        // setShowPassword(false);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.message);

        // setError('Invalid email or password');
        // setIsLoading(false);
        // setShowPassword(false);
      });
  }

  switch (inputs.step) {
    case 1:
      return (
        <Box width="100%">
          <Grid templateColumns="repeat(5, 1fr)" gap={4}>
            <Box>{generateStepper(inputs.step - 1)}</Box>
            <Box bg="#E5E5E5" width="100%" height="100%" py={8} px={12}>
              <Step1
                prevStep={prevStep}
                nextStep={nextStep}
                handleChange={handleChange}
                values={inputs}
              />
            </Box>
          </Grid>
        </Box>
      );
    case 2:
      return (
        <HStack>
          {generateStepper(inputs.step - 1)}
          <Box bg="#E5E5E5" width="100%" height="100%" py={8} px={12}>
            <Step2
              prevStep={prevStep}
              nextStep={nextStep}
              handleChange={handleChange}
              values={inputs}
            />
          </Box>
        </HStack>
      );
    case 3:
      return (
        <HStack>
          {generateStepper(inputs.step - 1)}
          <Box bg="#E5E5E5" width="100%" height="100%" py={8} px={12}>
            <Step3
              prevStep={prevStep}
              nextStep={nextStep}
              handleChange={handleChange}
              values={inputs}
              handleUserSubmit={handleUserSubmit}
            />
          </Box>
        </HStack>
      );
    case 4:
      return (
        <Box>
          {inputs.firstName}
          {inputs.lastName}
          {inputs.email}
          {inputs.screenName}
          {inputs.password}
        </Box>
      );
  }
};

export default CreateAccount;
