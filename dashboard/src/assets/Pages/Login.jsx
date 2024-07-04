import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://192.168.10.41:3004/auth/login", {
        email,
        password,
      });
      console.log(response.data);
      setError('');
      // Handle successful login, e.g., save token and redirect
      // localStorage.setItem('token', response.data.token);
      // window.location.href = '/dashboard'; // Replace with your dashboard route
    } catch (error) {
      setError('Login failed');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
