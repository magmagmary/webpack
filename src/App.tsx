import React from 'react';
import { useTranslation } from 'react-i18next';
import Loading from '@src/components/shared/Loading';
import Router from '@src/router';
import i18n from './plugins/I18n';

const App = () => {
  const { ready } = useTranslation();

  if (ready) {
    return <Router />;
  }
  return <Loading />;
};

export default App;
