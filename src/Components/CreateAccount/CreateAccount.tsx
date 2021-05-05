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
    role: ''
  });

  const [errorStep1, setErrorStep1] = useState('');
  const [errorStep2, setErrorStep2] = useState('');
  const [errorStep3, setErrorStep3] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  function getSteps() {
    return ['Step 1', 'Step 2', 'Step 3'];
  }
  const steps = getSteps();

  const handleChange = (input) => (e) => {
    setInputs((prev) => ({ ...prev, [input]: e.target.value }));
  };

  const handleRadio = (input) => (e) => {
    setInputs((prev) => ({ ...prev, ['radio']: e.target.value }));
  }

  function nextStep() {
    setInputs((prev) => ({ ...prev, ['step']: inputs.step + 1 }));
  }

  function prevStep() {
    setInputs((prev) => ({ ...prev, ['step']: inputs.step - 1 }));
  }

  function clearErrors() {
    setErrorStep1('');
    setErrorStep2('');
    setErrorStep3('');
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
      role
    } = inputs;
    const interestsArray = interests.split(',');
    event.preventDefault();
    if (role == '') {
      clearErrors()
      prevStep()
      setErrorStep2("Please select a role");
      return;
    }
    else if (careerDevelopmentQ == '') {
      clearErrors()
      prevStep()
      setErrorStep2("Please select a career stage");
      return;
    }
    else if (aspirationsQ == '') {
      clearErrors()
      prevStep()
      setErrorStep2("Please select an aspiration");
      return;
    }
    else if (interestsArray.length == 0 || interests === '') {
      clearErrors()
      setErrorStep3("Please enter interests");
      return;
    }
    else if (bio.length < 20) {
      clearErrors()
      setErrorStep3("Bio length must be greater than 20 characters");
      return;
    }
    setIsLoading(true);
    axios
      .post(`http://localhost:3000/api/user/register`, {
        email,
        username: screenName,
        password,
        firstName,
        lastName,
        aspirationType: aspirationsQ.toLowerCase(),
        skillInterests: interestsArray,
        role: role.toLowerCase(),
        bio
      })
      .then((res) => {
        localStorage.setItem('authToken', res.data.authToken);
        setIsLoading(false);
        window.location.reload();
        clearErrors()
        console.log('Success');
        <Redirect to="/" />;
      })
      .catch((error) => {
        const response: AxiosResponse = error.response;
        const statusCode: number = response.status;
        setIsLoading(false);
        switch (statusCode) {
          case 409:
            setInputs((prev) => ({ ...prev, ['step']: 1}));
            clearErrors()
            setErrorStep1(response.data.message);
            break;
          case 400:
            clearErrors()
            setErrorStep3('Registration Failed: ' + response.data.message);
            break;
          default:
            clearErrors()
            setErrorStep3('Registration Failed.');
            break;
        }
        console.log(error);
        console.log(error.response);
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
                error={errorStep1}
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
                error={errorStep2}
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
                handleChange={handleChange}
                values={inputs}
                handleUserSubmit={handleUserSubmit}
                error={errorStep3}
                loading={isLoading}
              />
            </Box>
          </Flex>
        </Box>
      );
  }
};

export default CreateAccount;
