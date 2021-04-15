import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import BackAction from '../../components/BackAction';
import HeaderMain from '../../components/HeaderMain';
import Title from '../../components/Title';

import WrapperBusiness from '../../components/WrapperBusiness';

function Details() {
  const history = useHistory();

  const handleClick = () => {
    console.log('enter here => BackAction');
    history.goBack();
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
    </>
  );
}

export default Details;
