import React from 'react';

const Register = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>User register</h2>
      <div>
        <input type="text" placeholder="name" style={{ margin: '10px', padding: '8px' }} />
        <br />
        <input type="text" placeholder="phone number" style={{ margin: '10px', padding: '8px' }} />
        <br />
        <input type="password" placeholder="set password" style={{ margin: '10px', padding: '8px' }} />
        <br />
        <button style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#52c41a', color: 'white', border: 'none' }}>
          register
        </button>
      </div>
    </div>
  );
};

export default Register;
