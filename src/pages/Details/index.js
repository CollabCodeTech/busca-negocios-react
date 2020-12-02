import React from 'react';
import BackAction from '../../components/BackAction';
import HeaderMain from '../../components/HeaderMain';
import PhotoPreview from '../../components/PhotoPreview';
import Stars from '../../components/Stars';
import Title from '../../components/Title';
import coffee from '../../assets/images/coffee.png';
import DescriptionBox from '../../components/DescriptionBox';

function Details() {
  return (
    <>
      <HeaderMain />
      <BackAction />
      <Stars amount="5" />
      <Title>Cafeteria D’ Arte</Title>
      <PhotoPreview src={coffee} />
      <DescriptionBox>
        Aqui é só felicidade e café com um bom sol no verão e no inverno.
        gostosas sopas para deixar o seu dia mais quente e feliz.Aqui o
        proprietário poderá escrever o que quiser sobre o seu café ;-)
      </DescriptionBox>
    </>
  );
}

export default Details;
