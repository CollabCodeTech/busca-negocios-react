import React from 'react';
import Styles from '../src/styles';
import Reset from '../src/styles/generic/Reset';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#4c5b84'
      }
    ]
  }
};

export const decorators = [
  Story => (
    <>
      <Styles />
      <Reset />
      <Story />
    </>
  )
];
