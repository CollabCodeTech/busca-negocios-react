import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import BackAction from '../../components/BackAction';
import Day from '../../components/Day';
import HeaderMain from '../../components/HeaderMain';
import Title from '../../components/Title';

import WrapperBusiness from '../../components/WrapperBusiness';

function Details() {
  const history = useHistory();

  const handleClick = () => {
    console.log('enter here => BackAction');
    history.goBack();
  };

  const day = {
    title: 'Segunda',
    hours: [
      { start: '09:00', end: '14:00' },
      { start: '16:00', end: '22:00' }
    ]
  };
  return (
    <>
      <HeaderMain />
      <BackAction as="a" onClick={handleClick} content="Voltar" />
      <WrapperBusiness
        stars={5}
        title="Café Zé"
        description="Café do Zé é feliz... é gostoso ... é do povo"
      />

      <Title mantis={true}>Aberto agora</Title>
      <Day {...day} />
    </>
  );
}

export default Details;
