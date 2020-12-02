import React from 'react';
import BackAction from '../../components/BackAction';
import HeaderMain from '../../components/HeaderMain';
import Stars from '../../components/Stars';
import Title from '../../components/Title';

function Details() {
  return (
    <>
      <HeaderMain />
      <BackAction />
      <Stars amount="5" />
      <Title>Cafeteria D’ Arte</Title>
    </>
  );
}

export default Details;
