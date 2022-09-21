import React from 'react';
import logo from '@assets/images/logo.png';
import check from '@assets/images/check.png';

const App = () => {
  return (
    <div className='main-heading'>
      <img src={logo} width='32' title='Codesbiome' />
      <img src={check} width='32' title='Codesbiome' />
    </div>
  );
};

export default App;
