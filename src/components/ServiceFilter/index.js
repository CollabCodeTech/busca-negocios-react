import React from 'react';
import { ServiceFilterStyle, Label } from './styles';
import IconFilter from '../IconFilter';

function ServiceFilter() {
  return (
    <ServiceFilterStyle>
      <IconFilter />

      <Label>Guia de serviços</Label>
    </ServiceFilterStyle>
  );
}

export default ServiceFilter;
