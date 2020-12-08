import React from 'react';
import CardService from '../../components/CardService';

export default {
  title: 'Components/CardService',
  component: CardService,
  parameters: {
    layout: 'centered'
  }
};

const Template = args => <CardService {...args} />;

export const Featured = Template.bind({});
Featured.args = {
  contentFeatured: 'Em destaque',
  featured: true,
  name: 'Cafeteria D’ Arte',
  stars: 4
};

export const NoFeatured = Template.bind({});
NoFeatured.args = {
  contentFeatured: 'Em destaque',
  featured: false,
  name: 'Cafeteria D’ Arte',
  stars: 3
};
