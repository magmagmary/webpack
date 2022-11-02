import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import '@assets/styles/main.scss';
import '@src/plugins/I18n';
import { Provider } from 'react-redux';
import store from './store';

const isDev = process.env.NODE_ENV === 'development';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Suspense fallback={<>Hi</>}>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </Suspense>,
);

// Hot module replacement
if (isDev && module.hot) module.hot.accept();
