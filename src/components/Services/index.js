import React from 'react';
import CardService from '../CardService';
import ServicesStyles from './styles';

function Services({ list }) {
  return (
    <ServicesStyles>
      {list.map(props => (
        <CardService {...props} key={props.name} />
      ))}
    </ServicesStyles>
  );
}

export default Services;
