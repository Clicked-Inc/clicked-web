// import React from 'react';

// import Icon, { IconProps } from './Icon';
// import { Story } from '@storybook/react';

// export default {
//   component: Icon,
//   title: 'Icon',
// };

// const Template: Story<IconProps> = (args) => <Icon {...args} />;

// export const Custom = Template.bind({});

// Custom.args = {
//   name: 'Notification',
// };

// export const ReactIcons = Template.bind({});
// ReactIcons.args = {
//   type: 'react-icons',
//   name: '5',
// };

import React from 'react';
import { Story } from '@storybook/react';
import { Box } from '@chakra-ui/react';
import Icon, { IconProps } from './Icon';
import { ImCheckmark } from 'react-icons/im';
import Icons from './Assets';
import { IconNames } from './Icon';
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
Custom.args = {} as IconProps;

const Template2: Story<IconProps> = () => (
  <Box>
    <Icon as={ImCheckmark} type="react-icons" w={3} h={3} />
  </Box>
);
export const ReactIcons = Template2.bind({});
ReactIcons.args = {} as IconProps;

