import React from 'react';

import HeaderMain from '../../components/HeaderMain';
import ServiceFilter from '../../components/ServiceFilter';
import ButtonFixed from '../../components/ButtonFixed';
import CardService from '../../components/CardService';
import Services from '../../components/Services';

function Home() {
  return (
    <>
      <HeaderMain />

      <ServiceFilter />

      <Services>
        <CardService />
        <CardService />
        <CardService />
        <CardService />
      </Services>

      <ButtonFixed>Insira o seu negócio</ButtonFixed>
    </>
  );
}

export default Home;
