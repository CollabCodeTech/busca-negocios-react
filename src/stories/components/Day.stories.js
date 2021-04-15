import React from 'react';
import Day from '../../components/Day';

export default {
  title: 'components/Day',
  component: Day,
  parameters: {
    layout: 'centered'
  }
};

const Template = args => <Day {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Segunda',
  hours: [
    { start: '09:00', end: '14:00' },
    { start: '16:00', end: '22:00' }
  ]
};
