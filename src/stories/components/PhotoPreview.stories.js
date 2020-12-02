import React from 'react';
import PhotoPreview from '../../components/PhotoPreview';
import coffee from '../../assets/images/coffee.png';

export default {
  title: 'Components/PhotoPreview',
  component: PhotoPreview,
  parameters: {
    layout: 'centered'
  }
};

export const Default = () => <PhotoPreview src={coffee} />;
