// components/Login.js
import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = () => {
    // Placeholder for login authentication
    axios.post('/api/login', credentials).then(response => {
      console.log('Login successful', response.data);
      // Handle successful login
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <input 
        type="text"
        placeholder="Username"
        value={credentials.username}
        onChange={e => setCredentials({ ...credentials, username: e.target.value })}
      />
      <input 
        type="password"
        placeholder="Password"
        value={credentials.password}
        onChange={e => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
