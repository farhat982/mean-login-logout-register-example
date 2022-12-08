import React from 'react';
import { useState } from 'react';
import './Register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleRegister = () => {
    const { name, email, password, confirmPassword } = user;
    if (name && email && password && password === confirmPassword) {
      axios
        .post('http://localhost:4000/register', user)
        .then((res) => alert(res.data.message))
        .then(navigate('/login'));
    } else {
      alert('invalid input');
    }
  };

  return (
    <div className='register'>
      <h1>Register</h1>
      <input
        onChange={handleChange}
        type='text'
        name='name'
        value={user.name}
        placeholder='Please Enter your Name'
      />
      <input
        onChange={handleChange}
        type='text'
        name='email'
        value={user.email}
        placeholder='Please Enter your Email'
      />
      <input
        onChange={handleChange}
        type='password'
        name='password'
        value={user.password}
        placeholder='Please Enter your Password'
      />
      <input
        onChange={handleChange}
        type='password'
        name='confirmPassword'
        value={user.confirmPassword}
        placeholder='Please Confirm your Password'
      />
      <button
        className='button'
        onClick={handleRegister}
      >
        Register
      </button>
      <div>or</div>
      <button
        className='button'
        onClick={() => navigate('/login')}
      >
        Login
      </button>
    </div>
  );
};

export default Register;
