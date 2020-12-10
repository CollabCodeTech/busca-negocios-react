import React from 'react';
import { Link } from 'react-router-dom';
import Stars from '../../components/Stars';
import { Caption, CardServiceStyle, Figure, Photo, Title } from './styles';

function CardService({ featured, contentFeatured, name, stars }) {
  return (
    <CardServiceStyle>
      <Link to="/details">
        <Figure>
          <Photo />
          <Caption active={featured}>{contentFeatured}</Caption>
        </Figure>

        <Stars amount={stars} />
        <Title>{name}</Title>
      </Link>
    </CardServiceStyle>
  );
}

export default CardService;
