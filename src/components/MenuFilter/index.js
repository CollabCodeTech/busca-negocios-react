import React from 'react';
import Checkbox from '../Checkbox';
import MenuFilterStyle from './styles';

function MenuFilter({ active, items }) {
  return (
    <MenuFilterStyle active={active}>
      {items.map(({ id, label }) => (
        <Checkbox id={id} label={label} />
      ))}
    </MenuFilterStyle>
  );
}

export default MenuFilter;
