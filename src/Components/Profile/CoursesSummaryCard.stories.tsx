import React from 'react';
import { Story } from '@storybook/react';
import HoverProfile from './HoverProfile';
<<<<<<< HEAD
import CoursesSummaryCard from './CoursesSummaryCard';
=======
import CoursesSummaryCard from 'src/Components/Profile/CoursesSummaryCard';
>>>>>>> c905ee4... styling almost done, need to get storyboard and icons to work still

export default {
  title: 'CoursesSummaryCard',
  component: CoursesSummaryCard,
};

export const Text = () => <CoursesSummaryCard />;

// const Template: Story<HoverProfileProps> = (args) => <HoverProfile {...args} />;

// export const Primary = Template.bind({});
// Primary.args = { children: 'HoverProfile' };
