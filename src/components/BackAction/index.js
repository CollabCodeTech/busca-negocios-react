import React from 'react';
import IconArrow from '../IconArrow';
import BackActionStyle from './styles';

function BackAction({ as, content }) {
  return (
    <BackActionStyle as={as}>
      <IconArrow />
      {content}
    </BackActionStyle>
  );
}

export default BackAction;
