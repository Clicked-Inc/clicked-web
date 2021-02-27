import React from 'react';
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

import Task from './Header';

export default {
  component: Task,
  title: 'Task',
};

const Template = args => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};
>>>>>>> 575ed7d... [V1-32] Almost done with Icons
