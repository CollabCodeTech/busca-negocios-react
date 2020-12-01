import React from 'react';
import MenuFilter from '../../components/MenuFilter';

export default {
  title: 'Components/MenuFilter',
  component: MenuFilter
};

const Template = args => <MenuFilter {...args} />;

export const Open = Template.bind({});
Open.args = {
  active: true
};

export const Close = Template.bind({});
Close.args = {
  active: false
};
