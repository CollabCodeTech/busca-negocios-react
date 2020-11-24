import React from 'react';
import ReactDOM from 'react-dom';

import Gap from './styles/settings/Gap';
import Reset from './styles/generic/Reset';
import Base from './styles/elements/Base';
import App from './App';

ReactDOM.render(
  <>
    <Gap />
    <Reset />
    <Base />

    <App />
  </>,
  document.getElementById('root')
);
