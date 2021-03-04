import React from 'react';
import { Story } from '@storybook/react';
import Tags from './Tags';

export default {
  component: Tags,
  title: 'Tags',
};

const Template1: Story = () => (
  <Tags type="orange_white_small" name="Tag Name"/>
);
export const OrangeWhiteSmall = Template1.bind({});

const Template2: Story = () => (
  <Tags type="gray_black_small" name="Tag Name"/>
);
export const GrayBlackSmall = Template2.bind({});

const Template3: Story = () => (
  <Tags type="orange_white_medium" name="Tag Name"/>
);
export const OrangeWhiteMedium = Template3.bind({});

const Template4: Story = () => (
  <Tags type="white_gray_medium" name="Tag Name"/>
);
export const WhiteGrayMedium = Template4.bind({});

const Template5: Story = () => (
  <Tags type="orange_white_icon" name="Tag Name" icon="InkIcon"/>
);
export const OrangeWhiteIcon = Template5.bind({});

const Template6: Story = () => (
  <Tags type="white_gray_icon1" name="Tag Name" icon="InkIcon"/>
);
export const WhiteGrayIconL = Template6.bind({});

const Template7: Story = () => (
  <Tags type="white_gray_icon2" name="Tag Name" icon="InkIcon"/>
);
export const WhiteGrayIconM = Template7.bind({});

