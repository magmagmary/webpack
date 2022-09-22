import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/styles/main.scss';
const isDev = process.env.NODE_ENV === 'development';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot module replacement
if (isDev && module.hot) module.hot.accept();
