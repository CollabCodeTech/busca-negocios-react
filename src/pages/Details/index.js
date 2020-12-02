import React from 'react';
import BackAction from '../../components/BackAction';
import HeaderMain from '../../components/HeaderMain';
import PhotoPreview from '../../components/PhotoPreview';
import Stars from '../../components/Stars';
import Title from '../../components/Title';
import coffee from '../../assets/images/coffee.png';

function Details() {
  return (
    <>
      <HeaderMain />
      <BackAction />
      <Stars amount="5" />
      <Title>Cafeteria D’ Arte</Title>
      <PhotoPreview src={coffee} />
    </>
  );
}

export default Details;
