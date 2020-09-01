import React from 'react';

import HeaderMain from './components/HeaderMain';
import LogoMain from './components/LogoMain';
import IconSearch from './components/IconSearch';
import { ServiceFilter, Label } from './components/ServiceFilter';
import IconFilter from './components/IconFilter';

function App() {
  return (
    <>
      <HeaderMain>
        <LogoMain />
        <IconSearch />
      </HeaderMain>

      <ServiceFilter>
        <IconFilter />

        <Label>Guia de serviços</Label>
      </ServiceFilter>
    </>
  );
}

export default App;
