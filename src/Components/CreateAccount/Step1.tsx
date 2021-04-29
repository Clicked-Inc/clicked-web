import React, { Component } from 'react';
import {
  Box,
  HStack,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  SimpleGrid,
  FormErrorMessage
} from '@chakra-ui/react';
import { Icon } from '../Icon';

import { useForm, Controller } from 'react-hook-form';

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

const Step1: React.FC<StepOneProps> = ({
  prevStep,
  nextStep,
  handleChange,
  values,
}) => {
  function next() {
    nextStep();
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const onSubmit = (data) => {
    console.log(data);
    next();
  };
  const onError = (errors, e) => console.log(errors, e);

  return (
    <Box>
      <Box mb={10} fontWeight="700" fontSize={36}>
        Create Account
      </Box>
      <Box>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <SimpleGrid minChildWidth="450px" columns={2} spacing={20}>
            {/* <VStack spacing={20}>
                    <HStack spacing={100}> */}
            <Box height={10}>
              <FormControl id="firstName">
                <FormLabel>First Name</FormLabel>
                <Input
                  {...register('firstName', {
                    required: {
                      value: true,
                      message: 'Please enter first name',
                    },
                  })}
                  value={values.firstName}
                  w={438}
                  bg="white"
                  defaultValue={values.firstName}
                  onChange={handleChange('firstName')}
                />
                <Box h={100}>{errors.firstName && (
                    <Box color="red.500">{errors.firstName.message}</Box>
                  )}</Box>
                  
              </FormControl>
            </Box>

            <FormControl id="lastName">
              <FormLabel>Last Name</FormLabel>
              <Input
                w={438}
                bg="white"
                {...register('lastName', {
                  required: { value: true, message: 'Please enter last name' },
                })}
                value={values.lastName}
                defaultValue={values.lastName}
                onChange={handleChange('lastName')}
              />
              <Box h={30}>
                {errors.lastName && (
                  <Box color="red.500">{errors.lastName.message}</Box>
                )}
              </Box>
            </FormControl>
            {/* </HStack>
                    
                    <HStack spacing={100}> */}
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                w={438}
                bg="white"
                {...register('email', {
                  required: { value: true, message: 'Please enter email' },
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Email must be in correct format',
                  },
                })}
                value={values.email}
                defaultValue={values.email}
                onChange={handleChange('email')}
              />
              <Box h={30}>
              {errors.email && (
                <Box color="red.500">{errors.email.message}</Box>
              )}</Box>
            </FormControl>

            <FormControl id="screenName">
              <FormLabel>Screen Name</FormLabel>
              <Input
                w={438}
                bg="white"
                {...register('screenName', {
                  required: {
                    value: true,
                    message: 'Please enter screen name',
                  },
                  minLength: {
                    value: 3,
                    message: 'Screen name must be least 3 characters long',
                  },
                })}
                value={values.screenName}
                defaultValue={values.screenName}
                onChange={handleChange('screenName')}
              />
              <Box h={30}>
              {errors.screenName && (
                <Box color="red.500">{errors.screenName.message}</Box>
              )}</Box>
            </FormControl>
            {/* </HStack>
                    <HStack spacing={100}> */}
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                w={438}
                bg="white"
                name="password"
                {...register('password', {
                  required: { value: true, message: 'Please enter password' },
                  minLength: {
                    value: 8,
                    message: 'Password must have at least 8 characters',
                  },
                })}
                defaultValue={values.password}
                onChange={handleChange('password')}
              />
              <Box>{errors.password && (
                <Box color="red.500">{errors.password.message}</Box>
              )}</Box>
            </FormControl>

            <FormControl id="retypePassword">
              <FormLabel>Re-Enter Password</FormLabel>
              <Input
                name="retypePassword"
                type="password"
                w={438}
                bg="white"
                {...register('retypePassword', {
                  required: { value: true, message: 'Please retype password' },
                  minLength: {value: 8, message: 'Password must have at least 8 characters'},
                  validate: (value) =>
                    value === values.password || 'The passwords do not match',
                })}
                defaultValue={values.retypePassword}
                onChange={handleChange('retypePassword')}
              />
              <Box h={30}>{errors.retypePassword && (
                <Box color="red.500">{errors.retypePassword.message}</Box>
              )}</Box>
            </FormControl>
            {/* </HStack>
                </VStack> */}
          </SimpleGrid>
          <Box marginTop={10} textAlign="right">
            <Button type="submit">Next</Button>
          </Box>
        </form>
        {/* 
                <Box marginTop={10} textAlign="right">
                    <Button onClick={next}>Continue</Button>
                </Box> */}
      </Box>
    </Box>
  );
};

export default Step1;
