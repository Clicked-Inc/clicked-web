import React from 'react';
import { Story } from '@storybook/react';
import HoverProfile from './HoverProfile';
import CoursesSummaryCard from 'src/Components/Profile/CoursesSummaryCard';
import Experiences from 'src/Components/Profile/Experiences';
import Badges from 'src/Components/Profile/Badges';
import ExperienceLevel from 'src/Components/Profile/ExperienceLevel';

export default {
  title: 'HoverProfile',
  component: HoverProfile,
};

export const Text = () => <HoverProfile />;

// const Template: Story<HoverProfileProps> = (args) => <HoverProfile {...args} />;

// export const Primary = Template.bind({});
// Primary.args = { children: 'HoverProfile' };
