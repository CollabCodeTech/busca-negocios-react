import React from 'react';

import HeaderMain from './components/HeaderMain';
import LogoMain from './components/LogoMain';
import IconSearch from './components/IconSearch';
import ServiceFilter from './components/ServiceFilter';
import ButtonFixed from './components/ButtonFixed';
import CardService from './components/CardService';
import Services from './components/Services';

function App() {
  return (
    <>
      <HeaderMain>
        <LogoMain />
        <IconSearch />
      </HeaderMain>

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

export default App;
