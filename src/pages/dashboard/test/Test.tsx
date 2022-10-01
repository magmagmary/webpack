import React from 'react';
import { useTranslation } from 'react-i18next';

function Test() {
  const { t: translate } = useTranslation();

  return <div>{translate('dashboard.nav.test')}</div>;
}

export default Test;
