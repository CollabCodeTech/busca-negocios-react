import React from 'react';
import Title from '../../components/Title';

export default {
  title: 'Components/Title',
  component: Title,
  parameters: {
    layout: 'centered'
  }
};

const Template = args => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Title feliz',
  mantis: false,
  gapLeft: false
};

export const Mantis = Template.bind({});
Mantis.args = {
  children: 'Title feliz Mantis',
  mantis: true,
  gapLeft: false
};

export const Gaps = Template.bind({});
Gaps.args = {
  children: 'Title feliz Mantis com gapLeft',
  mantis: true,
  gapLeft: true,
  gapTop: true,
  gapBottom: true
};
