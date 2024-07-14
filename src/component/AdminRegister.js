import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminRegister() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(true);
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = 'https://express-files-roan.vercel.app/api/login';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(false ? 'User registered successfully' : 'User logged in successfully');
        if (true) {
          localStorage.setItem('token', data.token);
          setIsLoggedIn(true);
          navigate('/post-job')
        }
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred');
    }
  };

  const toggleForm = () => {
    //setIsRegister(!isRegister);
    setMessage('');
  };

  return (
    <div>
      <h1>{false ? 'Sign Up' : 'Login'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">{false ? 'Register' : 'Login'}</button>
      </form>
      {message && <p>{message}</p>}
      <button onClick={toggleForm}>
        {true ? 'Already have an account? Login' : "Don't have an account? Register"}
      </button>
    </div>
  );
}

export default AdminRegister;
