import React from 'react';
import Stars from '../../components/Stars';

export default {
  title: 'Components/Stars',
  component: Stars,
  parameters: {
    layout: 'centered'
  }
};

export const OneStar = () => <Stars amount="1" />;

export const TwoStars = () => <Stars amount="2" />;

export const ThreeStars = () => <Stars amount="3" />;

export const FourStars = () => <Stars amount="4" />;

export const FiveStars = () => <Stars amount="5" />;
