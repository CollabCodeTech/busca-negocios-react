import React from 'react';
import Week from '../../components/Week';

export default {
  title: 'components/Week',
  component: Week,
  parameters: {
    layout: 'centered'
  }
};

const Template = args => <Week {...args} />;

export const Default = Template.bind({});
Default.args = {
  days: [
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
    ,
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
  ]
};
