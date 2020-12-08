import React from 'react';
import Stars from '../../components/Stars';

export default {
  title: 'Components/Stars',
  component: Stars,
  parameters: {
    layout: 'centered'
  }
};

const Template = args => <Stars {...args} />;

export const OneStar = Template.bind({});
OneStar.args = {
  amount: 1
};

export const TwoStars = Template.bind({});
TwoStars.args = {
  amount: 2
};

export const ThreeStars = Template.bind({});
ThreeStars.args = {
  amount: 3
};

export const FourStars = Template.bind({});
FourStars.args = {
  amount: 4
};

export const FiveStars = Template.bind({});
FiveStars.args = {
  amount: 5
};
