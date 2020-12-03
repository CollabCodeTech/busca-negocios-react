import React from 'react';
import ButtonFixed from '../../components/ButtonFixed';

export default {
  title: 'Components/ButtonFixed',
  component: ButtonFixed
};

const Template = args => <ButtonFixed {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Enviar'
};
