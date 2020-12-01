import React, { useState } from 'react';
import { ServiceFilterStyle, Label } from './styles';
import IconFilter from '../IconFilter';
import MenuFilter from '../MenuFilter';
import IconClose from '../IconClose';

function ServiceFilter() {
  const [activeMenu, setActiveMenu] = useState(false);

  const toggleMenu = () => {
    setActiveMenu(old => !old);
  };

  return (
    <>
      <ServiceFilterStyle active={activeMenu} onClick={toggleMenu}>
        <IconFilter />
        <IconClose />

        <Label>Guia de serviços</Label>
      </ServiceFilterStyle>
      <MenuFilter active={activeMenu} />
    </>
  );
}

export default ServiceFilter;
