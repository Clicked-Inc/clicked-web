import React, { Component } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  Flex,
  Spacer
} from '@chakra-ui/react';

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
  error: string;
};

const Step3: React.FC<StepThreeProps> = ({
  prevStep,
  nextStep,
  handleChange,
  values,
  handleUserSubmit,
  error
}) => {
  function previous(e) {
    prevStep();
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
              // {...register('interests', {
              //   required: {
              //     value: true,
              //     message: 'Please enter your interests',
              //   },
              // })}
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
              // {...register('bio', {
              //   required: { value: true, message: 'Please enter a bio' },
              // })}
              w={1000}
              bg="white"
              size="sm"
              value={values.bio}
              onChange={handleChange('bio')}
            />
            {errors.bio && <Box color="red.500">{errors.bio}</Box>}
          </FormControl>
          <Flex mt={10}>
            <Spacer />
            <Box>
              <Button onClick={previous}  mr="4">Back</Button>
              <Button type="submit">Complete Registration</Button>
            </Box>
          </Flex>
          <Flex mt={5}>
            <Spacer />
            <Box h={30}>
              <Box color="red.500">{error}</Box>
            </Box>
          </Flex>
        </Box>
      </form>
    </Box>
  );
};

export default Step3;
