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
<<<<<<< HEAD
>>>>>>> b90eeaa... styling almost done, need to get storyboard and icons to work still
=======

>>>>>>> dc1478f... Fix Icon
export type CustomIcon = {
  type?: 'custom';
  name: IconNames;
};
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> b90eeaa... styling almost done, need to get storyboard and icons to work still
=======

>>>>>>> dc1478f... Fix Icon
export type ReactIcons = {
  type: 'react-icons';
  as: any;
} & Omit<ChakraIconProps, 'css'>;
<<<<<<< HEAD
<<<<<<< HEAD

export type IconProps = CustomIcon | ReactIcons;

=======
export type IconProps = CustomIcon | ReactIcons;
>>>>>>> b90eeaa... styling almost done, need to get storyboard and icons to work still
=======

export type IconProps = CustomIcon | ReactIcons;

>>>>>>> dc1478f... Fix Icon
const Icon: React.FC<IconProps> = (props) => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
  console.log(Icons);
>>>>>>> 88b8213... [V1-32] Almost done with Icons
=======
>>>>>>> 3027390... [V1-32] Revised spacing, added Icons
  if (props.type === 'react-icons') {
    return <ChakraIcon {...props} />;
  } else {
    const SVG = Icons[props.name];
    return <SVG />;
  }
};
<<<<<<< HEAD
<<<<<<< HEAD

export default Icon;
=======
export default Icon;
>>>>>>> 88b8213... [V1-32] Almost done with Icons
=======
export default Icon;
>>>>>>> 143abe1... Fix Icon
