import React from 'react';
import IconSearch from '../IconSearch';
import LogoMain from '../LogoMain';
import HeaderMainStyle from './styles';

function HeaderMain() {
  return (
    <HeaderMainStyle>
      <LogoMain />
      <IconSearch />
    </HeaderMainStyle>
  );
}

export default HeaderMain;
