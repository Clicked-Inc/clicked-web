import React, { useState } from 'react';
import {
  Box,
  Text,
  Icon as ChakraIcon,
  Stack,
  Flex,
  Link,
  Button,
  IconButton,
  InputLeftAddon,
  Center,
  Checkbox,
  InputLeftElement,
  FormControl,
  FormLabel,
  Icon,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  CircularProgress,
  Container,
} from '@chakra-ui/react';
import { EmailIcon, UnlockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { userLogin } from './testing';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
// function* fetchUser(action) {
//    try {
//       const user = yield call(http://localhost:3000/api/user/register);
//       yield put({type: "USER_FETCH_SUCCEEDED", user: user});
//    } catch (e) {
//       yield put({type: "USER_FETCH_FAILED", message: e.message});
//    }
// }

// import { userLogin } from '../utils/mockApi';
import ErrorMessage from './ErrorMessage';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   setIsLoading(true);
  //   try {
  //     await userLogin({ email, password });
  //     setIsLoading(false);
  //   } catch (error) {
  //     setError('Invalid username or password');
  //     setIsLoading(false);
  //     setEmail('');
  //     setPassword('');
  //   }
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    axios
      .post(`http://localhost:3000/api/user/login`, {
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem('authToken', res.data.authToken);
        window.location.reload();
        setIsLoggedIn(true);
        setIsLoading(false);
        setShowPassword(false);
      })
      .catch((error) => {
        setError('Invalid email or password');
        setIsLoading(false);
        setEmail('');
        setPassword('');
        setShowPassword(false);
      });
  };

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box
        p={8}
        w="550px"
        h="395px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
        background="purple.900"
        color="white"
      >
        <>
          <Box textAlign="center">
            <Heading textAlign="left">Sign In</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <form onSubmit={handleSubmit}>
              {error && <ErrorMessage message={error} />}
              <FormControl isRequired>
                <Flex>
                  <InputGroup size="lg">
                    <InputLeftAddon>
                      <Icon as={EmailIcon} w={8} h={6} color="black"></Icon>
                    </InputLeftAddon>
                    <Input
                      background="white"
                      color="black"
                      type="email"
                      placeholder="test@test.com"
                      onChange={(event) => setEmail(event.currentTarget.value)} //!!
                    />
                  </InputGroup>
                </Flex>
              </FormControl>
              <FormControl isRequired mt={6}>
                <Flex>
                  <InputGroup size="lg">
                    <InputLeftAddon>
                      <Icon as={UnlockIcon} w={8} h={6} color="black"></Icon>
                    </InputLeftAddon>
                    <Input
                      color="black"
                      background="white"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="*******"
                      onChange={(event) =>
                        setPassword(event.currentTarget.value)
                      }
                    />
                    <InputRightElement width="3rem" mr={3}>
                      <Button
                        h="1.5rem"
                        size="sm"
                        onClick={handlePasswordVisibility}
                      >
                        {showPassword ? (
                          <Icon
                            as={ViewOffIcon}
                            w={7}
                            h={5}
                            color="black"
                          ></Icon>
                        ) : (
                          <Icon as={ViewIcon} w={7} h={5} color="black"></Icon>
                        )}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </Flex>
                <Stack isInline justifyContent="space-between" mt={4}>
                  <Box>
                    <Checkbox defaultIsChecked>Remember me</Checkbox>
                  </Box>
                  <Box>
                    <Link _hover={{ color: 'orange' }}>
                      Forgot your password?
                    </Link>
                  </Box>
                </Stack>
              </FormControl>
              <Center>
                <Button
                  background="orange.500"
                  color="white"
                  type="submit"
                  px={10}
                  mt={4}
                  py={6}
                  fontSize={19}
                  justifyContent="center"
                  _hover={{ background: 'orange.300' }}
                >
                  {isLoading ? (
                    <CircularProgress
                      isIndeterminate
                      size="24px"
                      color="teal"
                    />
                  ) : (
                    'Sign In'
                  )}
                </Button>
              </Center>
            </form>
          </Box>
        </>
      </Box>
    </Flex>
  );
}

// export default SignIn;
