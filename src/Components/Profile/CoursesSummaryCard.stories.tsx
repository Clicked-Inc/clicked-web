import React from 'react';
import { Story } from '@storybook/react';
import HoverProfile from './HoverProfile';
import CoursesSummaryCard from './CoursesSummaryCard';

export default {
  title: 'CoursesSummaryCard',
  component: CoursesSummaryCard,
};

export const Text = () => <CoursesSummaryCard />;

// const Template: Story<HoverProfileProps> = (args) => <HoverProfile {...args} />;

// export const Primary = Template.bind({});
// Primary.args = { children: 'HoverProfile' };
