import React from 'react';
import { Story } from '@storybook/react';
import Badges from 'src/Components/Profile/Badges';
import ExperienceLevel from 'src/Components/Profile/ExperienceLevel';

export default {
  title: 'ExperienceLevel',
  component: ExperienceLevel,
};

export const Text = () => <ExperienceLevel />;

// const Template: Story<ExperienceLevelProps> = (args) => <ExperienceLevel {...args} />;

// export const Primary = Template.bind({});
// Primary.args = { children: 'ExperienceLevel' };
