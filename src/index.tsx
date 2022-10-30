import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import '@assets/styles/main.scss';
import '@src/plugins/I18n';
import Loading from '@src/components/shared/Loading';
import { Provider } from 'react-redux';
import store from './store';

const isDev = process.env.NODE_ENV === 'development';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.Suspense fallback={<Loading />}>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.Suspense>,
);

// Hot module replacement
if (isDev && module.hot) module.hot.accept();
