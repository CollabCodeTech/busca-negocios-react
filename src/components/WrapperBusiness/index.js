import React from 'react';
import coffee from '../../assets/images/coffee.png';
import PhotoPreview from '../PhotoPreview';
import Stars from '../Stars';
import Title from '../Title';
import DescriptionBox from '../DescriptionBox';
import WrapperBusinessStyle from './styles';

function WrapperBusiness({ stars, title, description }) {
  return (
    <WrapperBusinessStyle>
      <Stars amount={stars} />
      <Title>{title}</Title>
      <PhotoPreview src={coffee} />
      <DescriptionBox>{description}</DescriptionBox>
    </WrapperBusinessStyle>
  );
}

export default WrapperBusiness;
