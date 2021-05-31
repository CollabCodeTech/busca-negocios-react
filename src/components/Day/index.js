import React from 'react';
import { Wrapper, Title, Hours, Item, Close } from './styles';

function Day({ title, hours, close, noBorder }) {
  const hasHours = () =>
    hours && (
      <Hours>
        {hours.map(({ start, end }) => (
          <Item>
            {start} - {end}
          </Item>
        ))}
      </Hours>
    );

  const hasClose = () => close && <Close>{close}</Close>;

  return (
    <Wrapper close={!!close} noBorder={!!noBorder}>
      <Title>{title}</Title>
      {hasHours()}
      {hasClose()}
    </Wrapper>
  );
}

export default Day;
