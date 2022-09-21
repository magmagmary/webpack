import { inDev } from '@assets/utils/helpers';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot module replacement
if (inDev() && module.hot) module.hot.accept();
