import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Icon as ChakraIcon, IconProps as ChakraIconProps } from '@chakra-ui/react';
import Icons from './Assets';

export type IconNames = keyof typeof Icons;

=======
=======
>>>>>>> 575ed7d... [V1-32] Almost done with Icons
import {
  Icon as ChakraIcon,
  IconProps as ChakraIconProps,
} from '@chakra-ui/react';
=======
import { Icon as ChakraIcon, IconProps as ChakraIconProps } from '@chakra-ui/react';
>>>>>>> 88b8213... [V1-32] Almost done with Icons
import Icons from './Assets';
export type IconNames = keyof typeof Icons;
>>>>>>> b90eeaa... styling almost done, need to get storyboard and icons to work still
export type CustomIcon = {
  type?: 'custom';
  name: IconNames;
};
<<<<<<< HEAD

=======
>>>>>>> b90eeaa... styling almost done, need to get storyboard and icons to work still
export type ReactIcons = {
  type: 'react-icons';
  as: any;
} & Omit<ChakraIconProps, 'css'>;
<<<<<<< HEAD

export type IconProps = CustomIcon | ReactIcons;

=======
export type IconProps = CustomIcon | ReactIcons;
>>>>>>> b90eeaa... styling almost done, need to get storyboard and icons to work still
const Icon: React.FC<IconProps> = (props) => {
<<<<<<< HEAD
=======
  console.log(Icons);
>>>>>>> 88b8213... [V1-32] Almost done with Icons
  if (props.type === 'react-icons') {
    return <ChakraIcon {...props} />;
  } else {
    const SVG = Icons[props.name];
    return <SVG />;
  }
};
<<<<<<< HEAD

export default Icon;
=======
export default Icon;
>>>>>>> 88b8213... [V1-32] Almost done with Icons
