import React from 'react';
import { Story } from '@storybook/react';
import MilestoneCard, { MilestoneCardProps } from './MilestoneCard';

export default {
  component: MilestoneCard,
  title: 'MilestoneCard',
};

const Template: Story<MilestoneCardProps> = (args) => (
  <MilestoneCard {...args} />
);

export const Unlocked = Template.bind({});
Unlocked.args = {
  unlocked: true,
  number: 1,
  title: 'User Experience Audit',
  tags: [
    { label: 'UI/UX', icon: 'UIUXIcon' },
    { label: 'Software Development', icon: 'SoftwareDevIcon' },
    { label: 'Markting', icon: 'MarketingIcon' },
  ],
  body:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lacus diam duis liber non venenatis, lobortis sed. Bibendum malesuada amet et mauris ornare ac nulla fermentum. A eget faucibus purus tristique fames velit sit at mollis. Vulputate potenti risus, dui aliquam sed sit. Morbi enim ipsum sed bibendum. Vel lacus tortor mi tortor aenean enim massa tincidunt. Sit eget ut egestas in integer volutpat posuere. Consectetur tincidunt sed egestas semper gravida porta. Faucibus ipsum dignissim scelerisque risus pellentesque. Nibh molestie ipsum fringilla tempor integer. Id cursus pharetra sapien turpis est nibh et. Elementum cursus diam sem lacus velit vivamus et congue. Enim aliquet et ultrices in donec. Viverra a cursus in amet non facilisi blandit adipiscing.',
  hint: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};

export const Locked = Template.bind({});
Locked.args = {
  unlocked: false,
  number: 1,
  title: 'User Experience Audit',
  tags: [
    { label: 'UI/UX', icon: 'UIUXIcon' },
    { label: 'Software Development', icon: 'SoftwareDevIcon' },
    { label: 'Markting', icon: 'MarketingIcon' },
  ],
  body:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lacus diam duis liber non venenatis, lobortis sed. Bibendum malesuada amet et mauris ornare ac nulla fermentum. A eget faucibus purus tristique fames velit sit at mollis. Vulputate potenti risus, dui aliquam sed sit. Morbi enim ipsum sed bibendum. Vel lacus tortor mi tortor aenean enim massa tincidunt. Sit eget ut egestas in integer volutpat posuere. Consectetur tincidunt sed egestas semper gravida porta. Faucibus ipsum dignissim scelerisque risus pellentesque. Nibh molestie ipsum fringilla tempor integer. Id cursus pharetra sapien turpis est nibh et. Elementum cursus diam sem lacus velit vivamus et congue. Enim aliquet et ultrices in donec. Viverra a cursus in amet non facilisi blandit adipiscing.',
  hint: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};
