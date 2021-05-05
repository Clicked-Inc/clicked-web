import React from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  Flex,
  Spacer,
  CircularProgress
} from '@chakra-ui/react';

import { useForm } from 'react-hook-form';

type StepThreeProps = {
  prevStep: Function;
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
    role: string;
  };
  handleUserSubmit: Function;
  error: string;
  loading: boolean;
};

const Step3: React.FC<StepThreeProps> = ({
  prevStep,
  handleChange,
  values,
  handleUserSubmit,
  error,
  loading
}) => {
  
  function previous(e) {
    prevStep();
  }

  const {
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
              bg="white"
              value={values.interests}
              onChange={handleChange('interests')}
            />
          </FormControl>

          <FormControl mt={5} id="bio">
            <FormLabel>Write a short bio about yourself.</FormLabel>
            <Textarea
              bg="white"
              size="sm"
              value={values.bio}
              onChange={handleChange('bio')}
            />
          </FormControl>
          <Flex mt={10}>
            <Spacer />
            <Box>
              <Button onClick={previous}  mr="4">Back</Button>
              <Button type="submit" width={200}>{loading ? (
                    <CircularProgress
                      isIndeterminate
                      size="24px"
                      color="teal"
                    />
                  ) : (
                    'Complete Registration'
                  )}</Button>
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
