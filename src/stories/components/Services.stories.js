import React from 'react';
import Services from '../../components/Services';

export default {
  title: 'Components/Services',
  component: Services,
  parameters: {
    layout: 'centered'
  }
};

const servicesList = [
  {
    contentFeatured: 'Em destaque',
    featured: true,
    name: 'Cafeteria D’ Arte',
    stars: 4
  },
  {
    contentFeatured: 'Em destaque',
    featured: false,
    name: 'Café Maria',
    stars: 5
  },
  {
    contentFeatured: 'Em destaque',
    featured: false,
    name: 'Café Zé',
    stars: 5
  }
];

const Template = args => <Services {...args} />;

export const Default = Template.bind({});
Default.args = {
  list: servicesList
};
