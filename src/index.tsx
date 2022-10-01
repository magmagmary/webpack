import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import '@assets/styles/main.scss';
import '@src/plugins/I18n';
import Loading from '@src/components/shared/Loading';

const isDev = process.env.NODE_ENV === 'development';

ReactDOM.render(
  <React.Suspense fallback={<Loading />}>
    <Router>
      <App />
    </Router>
  </React.Suspense>,
  document.getElementById('root'),
);

// Hot module replacement
if (isDev && module.hot) module.hot.accept();
