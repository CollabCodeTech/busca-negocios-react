import React from 'react';
import Checkbox from '../../components/Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered'
  }
};

const Template = args => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'jogos',
  label: 'Jogos'
};
