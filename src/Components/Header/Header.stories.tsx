import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Story } from '@storybook/react';
import Header from './Header';

export default {
  component: Header,
  title: 'Header',
};

const Template: Story = () => (
  <Header />
);
export const Default = Template.bind({});


=======

=======
import { Story } from '@storybook/react';
>>>>>>> 2495692... [V1-32] Revised Stories and positioning
import Header from './Header';

export default {
  component: Header,
  title: 'Header',
};

const Template: Story = () => (
  <Header />
);
export const Default = Template.bind({});


<<<<<<< HEAD
export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};
>>>>>>> 575ed7d... [V1-32] Almost done with Icons
=======
>>>>>>> 61f3229... [V1-32] Revised spacing, added Icons
