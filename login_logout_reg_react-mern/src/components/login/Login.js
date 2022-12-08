import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleLogin = () => {
    const { email, password } = user;
    if (email && password) {
      axios.post('http://localhost:4000/login', user).then((res) => {
        alert(res.data.message);
        navigate('/');
      });
    } else {
      alert('please enter email and password');
    }
  };
  return (
    <div className='login'>
      <h1>Login</h1>
      <input
        onChange={handleChange}
        name='email'
        value={user.email}
        type='text'
        placeholder='Please Enter your Email'
      />
      <input
        onChange={handleChange}
        name='password'
        value={user.password}
        type='password'
        placeholder='Please Enter your Password'
      />
      <button
        className='button'
        onClick={handleLogin}
      >
        Login
      </button>
      <div>or</div>
      <button
        className='button'
        onClick={() => navigate('/register')}
      >
        Register
      </button>
    </div>
  );
};

export default Login;
