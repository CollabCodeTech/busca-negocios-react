import React from 'react';

import HeaderMain from './components/HeaderMain';
import LogoMain from './components/LogoMain';
import IconSearch from './components/IconSearch';
import IconFilter from './components/IconFilter';

function App() {
  return (
    <>
      <HeaderMain>
        <LogoMain />
        <IconSearch />
      </HeaderMain>

      <IconFilter />
    </>
  );
}

export default App;
