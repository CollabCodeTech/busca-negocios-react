import React from 'react';
import IconArrow from '../IconArrow';
import BackActionStyle from './styles';

function BackAction({ as }) {
  return (
    <BackActionStyle as={as}>
      <IconArrow />
      Voltar
    </BackActionStyle>
  );
}

export default BackAction;
