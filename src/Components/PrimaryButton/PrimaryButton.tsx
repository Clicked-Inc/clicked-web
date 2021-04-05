import React from 'react';
import { Button as ChakraButton } from "@chakra-ui/react";
import { Icon } from "../Icon";

type PrimaryButtonVariants = "large" | "small"

type PrimaryButtonProps = {
  variant: PrimaryButtonVariants;
  text: string
}


const PrimaryButton: React.FC<PrimaryButtonProps> = ({ variant, text }) => {
    if (variant === "large") {
        return (
            <ChakraButton display="flex" flex-direction="column" fontSize={16} fontWeight="600" color="white" borderRadius="6px" width="224px" height="36px" bg="orange.400">{text}</ChakraButton>
        )
    }
    else if (variant === "small") {
        return (
            <ChakraButton display="flex" flex-direction="column" fontSize={16} fontWeight="600" color="white" borderRadius="6px" py="10px" px="40px" bg="orange.400">{text}</ChakraButton>
        )
    }
}

export default PrimaryButton;
