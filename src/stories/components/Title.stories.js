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
  children: 'Title feliz'
};
