import React, { useEffect } from 'react';
import Router from '@src/router';
import { useSelector } from 'react-redux';
import axiosClient from './plugins/axios';
import { getAxiosInstanceState } from './store/publicSlice';
import store from './store';

const App = () => {
  useEffect(() => {
    axiosClient.setupAxiosInterceptors(store);
  }, []);

  const axiosClientState: 'active' | 'disabled' = useSelector(
    getAxiosInstanceState,
  );

  console.log('axiosClientState', axiosClientState);
  if (axiosClientState === 'disabled') return <></>;
  return <Router />;
};

export default App;
