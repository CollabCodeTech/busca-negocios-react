import React from 'react';
import IconArrow from '../IconArrow';
import BackActionStyle from './styles';

function BackAction({ as, content, onClick }) {
  return (
    <BackActionStyle as={as} onClick={onClick}>
      <IconArrow />
      {content}
    </BackActionStyle>
  );
}

export default BackAction;
