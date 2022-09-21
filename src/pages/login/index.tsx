import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const forceLogin = () => {
    localStorage.setItem('token', 'test');
    navigate('/');
  };

  return (
    <div>
      Login Page
      <button onClick={forceLogin}>Login</button>
    </div>
  );
};

export default Login;
