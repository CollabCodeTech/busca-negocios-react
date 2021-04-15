import React from 'react';
import { Wrapper, Title, Hours, Item } from './styles';

function Day({ title, hours }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Hours>
        {hours.map(({ start, end }) => (
          <Item>
            {start} - {end}
          </Item>
        ))}
      </Hours>
    </Wrapper>
  );
}

export default Day;
