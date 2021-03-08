import React from 'react';
import { Story } from '@storybook/react';
import { Box } from '@chakra-ui/react';
import Icon, { IconProps, IconNames } from './Icon';
import { ImCheckmark } from 'react-icons/im';
import Icons from './Assets';

export default {
  title: 'Icon',
  component: Icon,
};

const Template: Story<IconProps> = () => (
  <Box>
    {Object.keys(Icons).map((key) => (
      <Icon key={key} name={key as IconNames} />
    ))}
  </Box>
);
export const Custom = Template.bind({});

const Template: Story<IconProps> = () => (
  <Box>
    {Object.keys(Icons).map((key) => (
      <Icon key={key} name={key as IconNames} />
    ))}
  </Box>
);
export const Custom = Template.bind({});

const Template2: Story<IconProps> = () => (
  <Box>
    <Icon as={ImCheckmark} type="react-icons" w={3} h={3} />
  </Box>
);
export const ReactIcons = Template2.bind({});
