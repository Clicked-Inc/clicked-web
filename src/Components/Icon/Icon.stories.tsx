import React from 'react';

import Icon from './Icon';

export default {
  component: Icon,
  title: 'Icon',
};

const Template = args => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
    name:"notification"
};