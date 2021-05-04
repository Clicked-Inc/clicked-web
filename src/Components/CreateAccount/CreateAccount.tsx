import React, { Component, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Redirect } from 'react-router-dom';
import { Icon } from '../Icon';
import axios, { AxiosResponse } from 'axios';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { NextApiResponse } from 'next';

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

  const [error, setError] = useState('');

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
      <Box py={5} px={50} textAlign="center" height="100%">
        <Box mb={10}>
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
    const interestsArray = interests.split(',');

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
        setError('');
        console.log('Success');
        <Redirect to="/" />;
      })
      .catch((error) => {
        const response: AxiosResponse = error.response;
        const statusCode: number = response.status;
        switch (statusCode) {
          case 409:
            setError(response.data.message);
            break;
          case 400:
            setError('Authentication Failed.');
            break;
          default:
            setError('Authentication Failed.');
            break;
        }
        console.log(error);
        console.log(error.response);
        // setError('Invalid email or password');
        // setIsLoading(false);
        // setShowPassword(false);
      });
  }

  switch (inputs.step) {
    case 1:
      return (
        <Box>
          <Flex columns={2}>
            <Box width="30%">{generateStepper(inputs.step - 1)}</Box>
            <Box bg="#E5E5E5" maxHeight="100%" width="100%" py={8} px={12}>
              <Step1
                prevStep={prevStep}
                nextStep={nextStep}
                handleChange={handleChange}
                values={inputs}
              />
            </Box>
          </Flex>
        </Box>
      );
    case 2:
      return (
        <Box>
          <Flex columns={2}>
            <Box width="30%">{generateStepper(inputs.step - 1)}</Box>
            <Box bg="#E5E5E5" maxHeight="100%" width="100%" py={8} px={12}>
              <Step2
                prevStep={prevStep}
                nextStep={nextStep}
                handleChange={handleChange}
                values={inputs}
              />
            </Box>
          </Flex>
        </Box>
      );
    case 3:
      return (
        <Box>
          <Flex columns={2}>
            <Box width="30%">{generateStepper(inputs.step - 1)}</Box>
            <Box bg="#E5E5E5" maxHeight="100%" width="100%" py={8} px={12}>
              <Step3
                prevStep={prevStep}
                nextStep={nextStep}
                handleChange={handleChange}
                values={inputs}
                handleUserSubmit={handleUserSubmit}
                error={error}
              />
            </Box>
          </Flex>
        </Box>
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
