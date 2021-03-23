import React from 'react';
import { Story } from '@storybook/react';
import Tag from './Tag';

export default {
  component: Tag,
  title: 'Tag',
};

const Template1: Story = () => (
  <Tag variant="orange-white-small" label="Tag Name" icon=""/>
);
export const OrangeWhiteSmall = Template1.bind({});

const Template2: Story = () => (
  <Tag variant="gray-black-small" label="Tag Name" icon=""/>
);
export const GrayBlackSmall = Template2.bind({});

const Template3: Story = () => (
  <Tag variant="orange-white-medium" label="Tag Name" icon=""/>
);
export const OrangeWhiteMedium = Template3.bind({});

const Template4: Story = () => (
  <Tag variant="white-gray-medium" label="Tag Name" icon=""/>
);
export const WhiteGrayMedium = Template4.bind({});

const Template5: Story = () => (
  <Tag variant="orange-white-icon" label="Tag Name" icon="InkIcon"/>
);
export const OrangeWhiteIcon = Template5.bind({});

const Template6: Story = () => (
  <Tag variant="white-gray-icon1" label="Tag Name" icon="InkIcon"/>
);
export const WhiteGrayIconL = Template6.bind({});

const Template7: Story = () => (
  <Tag variant="white-gray-icon2" label="Tag Name" icon="InkIcon"/>
);
export const WhiteGrayIconM = Template7.bind({});