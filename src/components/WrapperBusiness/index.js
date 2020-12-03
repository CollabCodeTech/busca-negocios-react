import React from 'react';
import coffee from '../../assets/images/coffee.png';
import PhotoPreview from '../PhotoPreview';
import Stars from '../Stars';
import Title from '../Title';
import DescriptionBox from '../DescriptionBox';
import WrapperBusinessStyle from './styles';

function WrapperBusiness() {
  return (
    <WrapperBusinessStyle>
      <Stars amount="5" />
      <Title>Cafeteria D’ Arte</Title>
      <PhotoPreview src={coffee} />
      <DescriptionBox>
        Aqui é só felicidade e café com um bom sol no verão e no inverno.
        gostosas sopas para deixar o seu dia mais quente e feliz.Aqui o
        proprietário poderá escrever o que quiser sobre o seu café ;-)
      </DescriptionBox>
    </WrapperBusinessStyle>
  );
}

export default WrapperBusiness;
