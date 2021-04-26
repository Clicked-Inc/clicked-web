import React, { Component } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  HStack,
  Textarea,
} from '@chakra-ui/react';
import { Icon } from '../Icon';

import { useForm, Controller } from 'react-hook-form';

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
  };
  handleUserSubmit: Function;
};

const Step3: React.FC<StepThreeProps> = ({
  prevStep,
  nextStep,
  handleChange,
  values,
  handleUserSubmit,
}) => {
  function previous(e) {
    prevStep();
  }

  function next() {
    nextStep();
  }

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const onSubmit = (data) => {
    console.log(data);
    handleUserSubmit();
    next();
  };
  const onError = (errors, e) => console.log(errors, e);

  return (
    <Box>
      <Box mb={10} fontWeight="700" fontSize={36}>
        Create Account
      </Box>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <Box>
          <FormControl mt={5} id="interests">
            <FormLabel>What are some of your interests?</FormLabel>
            <Input
              {...register('interests', {
                required: {
                  value: true,
                  message: 'Please enter your interests',
                },
              })}
              w={1000}
              bg="white"
              value={values.interests}
              onChange={handleChange('interests')}
            />
            {errors.interests && <Box color="red.500">{errors.interests}</Box>}
          </FormControl>

          <FormControl mt={5} id="bio">
            <FormLabel>Write a short bio about yourself.</FormLabel>
            <Textarea
              {...register('bio', {
                required: { value: true, message: 'Please enter a bio' },
              })}
              w={1000}
              bg="white"
              size="sm"
              value={values.bio}
              onChange={handleChange('bio')}
            />
            {errors.bio && <Box color="red.500">{errors.bio}</Box>}
          </FormControl>
          <Box marginTop={15} textAlign="center">
            Upload a profile picture
          </Box>
          <Box marginTop={10} textAlign="right">
            <Box mr={3}>
              <Button onClick={previous}>Back</Button>
              <input type="submit" />
            </Box>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default Step3;
