import React from 'react';
import Checkbox from '../Checkbox';
import MenuFilterStyle from './styles';

function MenuFilter() {
  return (
    <MenuFilterStyle>
      <Checkbox id="alimentacao" />
      <Checkbox id="animais" />
      <Checkbox id="arteecultura" />
      <Checkbox id="entidades" />
      <Checkbox id="autioevideo" />
      <Checkbox id="automovies" />
      <Checkbox id="bancos" />
      <Checkbox id="baresebebidas" />
      <Checkbox id="belezaeestetica" />
      <Checkbox id="cafes" />
      <Checkbox id="criancaebebe" />
      <Checkbox id="diversaoelazer" />
      <Checkbox id="escritorioeseguranca" />
      <Checkbox id="esporteefitness" />
    </MenuFilterStyle>
  );
}

export default MenuFilter;
