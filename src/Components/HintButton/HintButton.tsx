import React, { useState } from 'react';
import {
  Box,
  Button,
  Center,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from '@chakra-ui/react';
import { Icon } from '@Internal/Components/Icon';

export type HintButtonProps = {
  hint: string;
};

const HintButton: React.FC<HintButtonProps> = ({ hint }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Popover>
      {({ isOpen }) => (
        <>
          <PopoverTrigger>
            <Button
              borderRadius="40px"
              px={0}
              color="#FF6600"
              bg="#FFF0E5"
              fontWeight="400"
              onMouseOver={() => setIsHover(true)}
              onMouseOut={() => setIsHover(false)}
              pr={isOpen ? '16px' : '0'}
              _hover={{ pr: '16px' }}
              _active={{ color: '#2B2541' }}
            >
              <Center
                bg="#FF6600"
                borderRadius="50%"
                h="40px"
                w="40px"
                boxShadow="md"
              >
                <Icon name="HintIcon" />
              </Center>
              <Box ml={isHover || isOpen ? 4 : 0}>
                {isHover || isOpen ? 'Get Hint' : ''}
              </Box>
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader borderBottom="none" />
            <PopoverBody>{hint}</PopoverBody>
          </PopoverContent>
        </>
      )}
    </Popover>
  );
};

export default HintButton;
