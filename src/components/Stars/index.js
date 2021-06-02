import React, { useState, useEffect } from 'react';
import { StarsStyle, Star, Icon } from './styles';

function Stars({ amount }) {
  const [amountStars, setAmountStars] = useState(['x']);

  useEffect(() => {
    setAmountStars(new Array(+amount).fill('x'));
  }, []);

  return (
    <StarsStyle>
      {amountStars.map((content, key) => (
        <Star key={key}>
          <Icon />
        </Star>
      ))}
    </StarsStyle>
  );
}

export default Stars;
