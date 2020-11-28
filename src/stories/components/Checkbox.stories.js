import React from 'react';
import Checkbox from '../../components/Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered'
  }
};

export const Default = () => <Checkbox id="alimentacao" label="Alimentação" />;
