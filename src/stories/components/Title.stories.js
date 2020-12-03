import React from 'react';
import Title from '../../components/Title';

export default {
  title: 'Components/Title',
  component: Title,
  parameters: {
    layout: 'centered'
  }
};

export const Default = () => <Title>Título da felicidade</Title>;
