import * as React from 'react';
import { BoxProps, Button as ChakraButton } from '@chakra-ui/react';

export type ButtonProps = BoxProps;

const Button: React.FC<ButtonProps> = ({ children }) => (
  <ChakraButton>{children}</ChakraButton>
);

export default Button;
