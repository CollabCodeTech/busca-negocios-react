import React from 'react';
import Checkbox from '../Checkbox';
import MenuFilterStyle from './styles';

function MenuFilter() {
  return (
    <MenuFilterStyle>
      <Checkbox id="alimentacao" label="Alimentção" />
      <Checkbox id="animais" label="Animais" />
      <Checkbox id="arteecultura" label="Arte e cultura" />
      <Checkbox id="entidades" label="Entidades" />
      <Checkbox id="autioevideo" label="Audio e vídeo" />
      <Checkbox id="automovies" label="Automovies" />
      <Checkbox id="bancos" label="Bancos" />
      <Checkbox id="baresebebidas" label="Bares e bebidas" />
      <Checkbox id="belezaeestetica" label="Beleza e estética" />
      <Checkbox id="cafes" label="Cafés" />
      <Checkbox id="criancaebebe" label="Crianças e bêbes" />
      <Checkbox id="diversaoelazer" label="Diversão e lazer" />
      <Checkbox id="escritorio" label="Escritóros" />
      <Checkbox id="esporte" label="Esporte" />
    </MenuFilterStyle>
  );
}

export default MenuFilter;
