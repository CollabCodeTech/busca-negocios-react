import React from 'react';
import BackAction from '../../components/BackAction';

export default {
  title: 'Components/BackAction',
  component: BackAction,
  parameters: {
    layout: 'centered'
  }
};

export const Default = () => <BackAction as="a" />;
