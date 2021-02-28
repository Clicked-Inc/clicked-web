import React from 'react';
import { Story } from '@storybook/react';

import Badges from './Badges';

export default {
  title: 'Badges',
  component: Badges,
};

export const Text = () => <Badges />;

// const Template: Story<HoverProfileProps> = (args) => <HoverProfile {...args} />;

// export const Primary = Template.bind({});
// Primary.args = { children: 'HoverProfile' };
