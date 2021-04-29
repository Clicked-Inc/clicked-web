import React, { Component } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Button,
  Flex,
  Spacer,
  Select
} from '@chakra-ui/react';

import { Icon } from '../Icon';

import { useForm, Controller } from 'react-hook-form';

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

const Step2: React.FC<StepTwoProps> = ({
  prevStep,
  nextStep,
  handleChange,
  values,
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
          <FormControl mt={5} id="careerDevelopmentQ">
            <FormLabel>
              Which of the following describes where you are in your career
              development?
            </FormLabel>
            <Controller
              name="careerDevelopmentQ"
              control={control}
              render={({ field }) => (
                <Select
                  bg="white"
                  onChange={handleChange('careerDevelopmentQ')}
                  value={values.careerDevelopmentQ}
                  placeholder="Select"
                >
                  <option value="option2">Option 1</option>
                  <option value="option3">Option 2</option>
                </Select>

              )}
            />
            {errors.careerDevelopmentQ && (
              <Box color="red.500">{errors.careerDevelopmentQ}</Box>
            )}
          </FormControl>

          <FormControl mt={5} id="aspirationsQ">
            <FormLabel>What are some of your aspirations?</FormLabel>
            <Controller
              name="aspirationsQ"
              control={control}
              render={({ field }) => (
                <Select
                  bg="white"
                  onChange={handleChange('aspirationsQ')}
                  value={values.aspirationsQ}
                  placeholder="Select"
                >
                  <option value="explore">Explore</option>
                  <option value="dive">Dive</option>
                </Select>
              )}
            />
          </FormControl>
          <Flex mt={10}>
            <Spacer />
            <Box>
              <Button onClick={previous}  mr="4">Back</Button>
              <Button type="submit">Next</Button>
            </Box>
          </Flex>
          {/* <Box marginTop={10} textAlign="right">
            
          </Box> */}
        </Box>
      </form>
    </Box>
  );
};

export default Step2;
