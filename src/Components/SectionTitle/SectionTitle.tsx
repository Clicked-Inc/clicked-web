import React from 'react';

import { VStack, Text } from '@chakra-ui/react';

const SectionTitle: React.FC = ({ children }) => {
  return (
    <VStack
      spacing="-0.3rem"
      justifyContent="flex-start"
      alignItems="flex-start"
      // bgColor="red.100"
      paddingY="1rem"
    >
      <svg
        width="12"
        height="6"
        viewBox="0 0 12 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.99871 5.05263C5.48388 5.05263 5.06653 4.62848 5.06653 4.10526V0.947368C5.06653 0.424149 5.48388 0 5.99871 0C6.51354 0 6.93089 0.424149 6.93089 0.947368V4.10526C6.93089 4.62848 6.51354 5.05263 5.99871 5.05263Z"
          fill="#FF6600"
        />
        <path
          d="M8.2115 4.38274L10.4087 2.14977C10.7727 1.7798 11.3629 1.7798 11.727 2.14977C12.091 2.51974 12.091 3.11959 11.727 3.48956L9.52982 5.72252C9.16576 6.09249 8.57552 6.09249 8.2115 5.72252C7.84745 5.35255 7.84745 4.75271 8.2115 4.38274Z"
          fill="#FF6600"
        />
        <path
          d="M3.78592 4.38274C4.14997 4.75271 4.14997 5.35255 3.78592 5.72252C3.4219 6.09249 2.83166 6.09248 2.4676 5.72252L0.273015 3.49218C-0.0910049 3.12221 -0.0910049 2.52237 0.273015 2.1524C0.637072 1.78242 1.22731 1.78242 1.59133 2.1524L3.78592 4.38274Z"
          fill="#FF6600"
        />
      </svg>
      <Text
        fontWeight="800"
        letterSpacing="0.01em"
        fontSize="2xl"
        color="#2B2541"
        // paddingTop="0.01rem"
      >
        {children}
      </Text>
    </VStack>
  );
};

export default SectionTitle;
