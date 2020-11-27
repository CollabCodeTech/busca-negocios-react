import React from 'react';
import { Check, Content } from './styles';

function Checkbox({ id }) {
  return (
    <>
      <Check id={id} />
      <Content htmlFor={id}>Alimentação</Content>
    </>
  );
}

export default Checkbox;
