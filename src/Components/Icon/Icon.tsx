import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Icon as ChakraIcon, IconProps as ChakraIconProps } from '@chakra-ui/react';
import Icons from './Assets';

export type IconNames = keyof typeof Icons;

=======
=======
>>>>>>> 575ed7d... [V1-32] Almost done with Icons
=======
>>>>>>> 807d78e... styling almost done, need to get storyboard and icons to work still
=======
>>>>>>> 643f9ba... minor changes
import {
  Icon as ChakraIcon,
  IconProps as ChakraIconProps,
} from '@chakra-ui/react';
import Icons from './Assets';

export type IconNames = keyof typeof Icons;
<<<<<<< HEAD
>>>>>>> b90eeaa... styling almost done, need to get storyboard and icons to work still
=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> dc1478f... Fix Icon
=======
=======
import {
  Icon as ChakraIcon,
  IconProps as ChakraIconProps,
} from '@chakra-ui/react';
import Icons from './Assets';
export type IconNames = keyof typeof Icons;
>>>>>>> b90eeaa... styling almost done, need to get storyboard and icons to work still
>>>>>>> 807d78e... styling almost done, need to get storyboard and icons to work still
=======
>>>>>>> 643f9ba... minor changes
export type CustomIcon = {
  type?: 'custom';
  name: IconNames;
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> b90eeaa... styling almost done, need to get storyboard and icons to work still
=======

>>>>>>> dc1478f... Fix Icon
=======

=======
>>>>>>> b90eeaa... styling almost done, need to get storyboard and icons to work still
>>>>>>> 807d78e... styling almost done, need to get storyboard and icons to work still
=======
>>>>>>> 643f9ba... minor changes
export type ReactIcons = {
  type: 'react-icons';
  as: any;
} & Omit<ChakraIconProps, 'css'>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

export type IconProps = CustomIcon | ReactIcons;

=======
export type IconProps = CustomIcon | ReactIcons;
>>>>>>> b90eeaa... styling almost done, need to get storyboard and icons to work still
=======

export type IconProps = CustomIcon | ReactIcons;

>>>>>>> dc1478f... Fix Icon
=======

export type IconProps = CustomIcon | ReactIcons;

=======
export type IconProps = CustomIcon | ReactIcons;
>>>>>>> b90eeaa... styling almost done, need to get storyboard and icons to work still
>>>>>>> 807d78e... styling almost done, need to get storyboard and icons to work still
=======

export type IconProps = CustomIcon | ReactIcons;

>>>>>>> 643f9ba... minor changes
const Icon: React.FC<IconProps> = (props) => {
  if (props.type === 'react-icons') {
    return <ChakraIcon {...props} />;
  } else {
    const SVG = Icons[props.name];
    return <SVG />;
  }
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

export default Icon;
=======
export default Icon;
>>>>>>> 88b8213... [V1-32] Almost done with Icons
=======
=======
>>>>>>> 643f9ba... minor changes
export default Icon;
