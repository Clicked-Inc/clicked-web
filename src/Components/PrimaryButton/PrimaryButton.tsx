import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';
import { Icon } from '../Icon';

type PrimaryButtonVariants = 'large' | 'small';

type PrimaryButtonProps = {
  variant: PrimaryButtonVariants;
  text: string;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ variant, text }) => {
  if (variant === 'large') {
    return (
      <ChakraButton
        display="flex"
        flex-direction="column"
        fontSize={16}
        fontWeight="600"
        color="white"
        borderRadius={6}
        py={5}
        px={20}
        bg="orange.400"
      >
        {text}
      </ChakraButton>
    );
  } else if (variant === 'small') {
    return (
      <ChakraButton
        display="flex"
        flex-direction="column"
        fontSize={16}
        fontWeight="600"
        color="white"
        borderRadius={6}
        py={5}
        pl={14}
        pr={14}
        bg="orange.400"
      >
        {text}
      </ChakraButton>
    );
  }
};

export default PrimaryButton;
