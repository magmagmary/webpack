import React from 'react';
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
  const { t: translate } = useTranslation();

  return <div>{translate('dashboard.nav.dashboard')}</div>;
};

export default Dashboard;
