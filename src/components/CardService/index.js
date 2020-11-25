import React from 'react';
import Stars from '../../components/Stars';
import { Caption, CardServiceStyle, Figure, Photo, Title } from './styles';

function CardService() {
  return (
    <CardServiceStyle>
      <Figure>
        <Photo />
        <Caption>Em destaque</Caption>
      </Figure>

      <Stars amount="5" />
      <Title>Cafeteria D’ Arte</Title>
    </CardServiceStyle>
  );
}

export default CardService;
