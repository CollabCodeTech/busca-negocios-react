import React from 'react';
import BackAction from '../../components/BackAction';

export default {
  title: 'Components/BackAction',
  component: BackAction,
  parameters: {
    layout: 'centered'
  }
};

const Template = args => <BackAction {...args} as="a" />;

export const Default = Template.bind({});
Default.args = {
  content: 'Voltar'
};
