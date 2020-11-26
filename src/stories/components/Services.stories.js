import React from 'react';
import Services from '../../components/Services';
import CardService from '../../components/CardService';

export default {
  title: 'Components/Services',
  component: Services,
  parameters: {
    layout: 'centered'
  }
};

export const Default = () => (
  <Services>
    <CardService />
    <CardService />
    <CardService />
    <CardService />
    <CardService />
  </Services>
);
