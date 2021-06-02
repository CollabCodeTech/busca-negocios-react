import React from 'react';
import { useHistory } from 'react-router-dom';
import BackAction from '../../components/BackAction';
import HeaderMain from '../../components/HeaderMain';
import Title from '../../components/Title';
import Week from '../../components/Week';
import WrapperBusiness from '../../components/WrapperBusiness';

function Details() {
  const history = useHistory();
  const days = [
    {
      title: 'Segunda',
      hours: [
        { start: '09:00', end: '14:00' },
        { start: '16:00', end: '22:00' }
      ],
      close: '',
      noBorder: false
    },
    {
      title: 'Terça',
      hours: [
        { start: '09:00', end: '14:00' },
        { start: '16:00', end: '22:00' }
      ],
      close: '',
      noBorder: false
    },
    {
      title: 'Quarta',
      hours: [
        { start: '09:00', end: '14:00' },
        { start: '16:00', end: '22:00' }
      ],
      close: '',
      noBorder: false
    },
    {
      title: 'Quinta',
      hours: [
        { start: '09:00', end: '14:00' },
        { start: '16:00', end: '22:00' }
      ],
      close: '',
      noBorder: false
    },
    {
      title: 'Sexta',
      hours: [
        { start: '09:00', end: '14:00' },
        { start: '16:00', end: '22:00' }
      ],
      close: '',
      noBorder: false
    },
    {
      title: 'Sábado',
      hours: [
        { start: '09:00', end: '14:00' },
        { start: '16:00', end: '22:00' }
      ],
      close: '',
      noBorder: false
    },
    {
      title: 'Domingo',
      hours: [
        { start: '09:00', end: '14:00' },
        { start: '16:00', end: '22:00' }
      ],
      close: '',
      noBorder: false
    },
    {
      title: 'Feriado',
      hours: '',
      close: 'Fechado',
      noBorder: true
    }
  ];

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

      <Title mantis={true} gapLeft gapBottom gapTop>
        Aberto agora
      </Title>
      <Week days={days} />
    </>
  );
}

export default Details;
