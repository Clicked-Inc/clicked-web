import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../../Theme';

const PageWrapper: React.FC = ({ children }) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);

export default PageWrapper;
