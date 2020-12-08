import React from 'react';
import ServiceFilter from '../../components/ServiceFilter';

export default {
  title: 'Components/SerivceFilter',
  component: ServiceFilter
};

const items = [
  { id: 'alimentacao', label: 'Alimentação' },
  { id: 'animais', label: 'Animais' },
  { id: 'arteecultura', label: 'Arte e cultura' },
  { id: 'entidades', label: 'Entidades' },
  { id: 'autioevideo', label: 'Audio e vídeo' },
  { id: 'automovies', label: 'Automovies' },
  { id: 'bancos', label: 'Bancos' },
  { id: 'baresebebidas', label: 'Bares e bebidas' },
  { id: 'belezaeestetica', label: 'Beleza e estética' },
  { id: 'cafes', label: 'Cafés' },
  { id: 'criancaebebe', label: 'Crianças e bêbes' },
  { id: 'diversaoelazer', label: 'Diversão e lazer' },
  { id: 'escritorio', label: 'Escritóros' },
  { id: 'esporte', label: 'Esporte' }
];

const Template = args => <ServiceFilter {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Guia de serviços',
  items
};
