import React from 'react';
import { Link } from 'react-router-dom';
import BackAction from '../../components/BackAction';
import HeaderMain from '../../components/HeaderMain';

import WrapperBusiness from '../../components/WrapperBusiness';

function Details() {
  return (
    <>
      <HeaderMain />
      <BackAction as={Link} content="Volar" />
      <WrapperBusiness
        stars={5}
        title="Café Zé"
        description="Café do Zé é feliz... é gostoso ... é do povo"
      />
    </>
  );
}

export default Details;
