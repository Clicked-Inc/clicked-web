import React from 'react';
<<<<<<< HEAD
import { Icon as ChakraIcon, IconProps as ChakraIconProps } from '@chakra-ui/react';
import Icons from './Assets';

export type IconNames = keyof typeof Icons;

=======
import {
  Icon as ChakraIcon,
  IconProps as ChakraIconProps,
} from '@chakra-ui/react';
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
  if (props.type === 'react-icons') {
    return <ChakraIcon {...props} />;
  } else {
    const SVG = Icons[props.name];
    return <SVG />;
  }
};

export default Icon;
