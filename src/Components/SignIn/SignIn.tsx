import React, { useState } from 'react';
import {
  Box,
  Stack,
  Flex,
  Link,
  Button,
  InputLeftAddon,
  Center,
  Checkbox,
  FormControl,
  Icon,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  CircularProgress,
} from '@chakra-ui/react';
import { EmailIcon, UnlockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from 'axios';
import ErrorMessage from './ErrorMessage';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => setShowPassword(!showPassword);

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
        console.log(email);
        console.log(password);
        setError('Invalid email or password');
        setIsLoading(false);
        // setEmail('');
        // setPassword('');
        setShowPassword(false);
      });
  };

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box
        p={8}
        w="550px"
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
                      onChange={(event) => setEmail(event.currentTarget.value)}
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
                  px={12}
                  mt={5}
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
};

export default SignIn;
