import React from 'react';
import Stars from '../../components/Stars';
import { Caption, CardServiceStyle, Figure, Photo, Title } from './styles';

function CardService({ featured, contentFeatured, name, stars }) {
  return (
    <CardServiceStyle>
      <Figure>
        <Photo />
        <Caption active={featured}>{contentFeatured}</Caption>
      </Figure>

      <Stars amount={stars} />
      <Title>{name}</Title>
    </CardServiceStyle>
  );
}

export default CardService;
