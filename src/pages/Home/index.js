import React from 'react';

import HeaderMain from '../../components/HeaderMain';
import ServiceFilter from '../../components/ServiceFilter';
import ButtonFixed from '../../components/ButtonFixed';
import CardService from '../../components/CardService';
import Services from '../../components/Services';

function Home() {
  const items = [
    { id: 'alimentacao', label: 'Alimentação' },
    { id: 'animais', label: 'Animais' },
    { id: 'arteecultura', label: 'Arte e cultura' },
    { id: 'entidades', label: 'Entidades' },
    { id: 'autioevideo', label: 'Audio e vídeo' },
    { id: 'automovies', label: 'Automovies' },
    { id: 'bancos', label: 'Bancos' },
    { id: 'baresebebidas', label: 'Bares e bebidas' },
    { id: 'belezaeestetica', label: 'Beleza e estética' },
    { id: 'cafes', label: 'Cafés' },
    { id: 'criancaebebe', label: 'Crianças e bêbes' },
    { id: 'diversaoelazer', label: 'Diversão e lazer' },
    { id: 'escritorio', label: 'Escritóros' },
    { id: 'esporte', label: 'Esporte' }
  ];

  const servicesList = [
    {
      contentFeatured: 'Em destaque',
      featured: true,
      name: 'Cafeteria D’ Arte',
      stars: 4
    },
    {
      contentFeatured: 'Em destaque',
      featured: false,
      name: 'Café Maria',
      stars: 5
    },
    {
      contentFeatured: 'Em destaque',
      featured: false,
      name: 'Café Zé',
      stars: 5
    }
  ];

  return (
    <>
      <HeaderMain />

      <ServiceFilter label="Guia de serviços" items={items} />

      <Services list={servicesList} />

      <ButtonFixed>Insira o seu negócio</ButtonFixed>
    </>
  );
}

export default Home;
