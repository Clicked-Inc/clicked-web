import React from 'react';

import Icon, { IconProps } from './Icon';
import { Story } from '@storybook/react';

export default {
  component: Icon,
  title: 'Icon',
};

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: 'Notification',
};
