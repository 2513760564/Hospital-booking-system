import '.auth.css';
//User login
import React from 'react';

const Login = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Hospital booking system - Login</h2>
      <div>
        <input type="text" placeholder="Phone number" style={{ margin: '10px', padding: '8px' }} />
        <br />
        <input type="password" placeholder="Password" style={{ margin: '10px', padding: '8px' }} />
        <br />
        <button style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#1890ff', color: 'white', border: 'none' }}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
