import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './authPage.css';

const AuthForm = ({ onAuth, error: authError, isSubmitting }) => {
  const [form, setForm] = useState({
    credential: '',
    password: '',
    showPassword: false,
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((currentForm) => ({
      ...currentForm,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.credential.trim()) {
      setError('Email or username is required');
      return;
    }

    setError('');
    onAuth(form);
  };

  return (
    <form onSubmit={handleSubmit} style={{ lineHeight: '20px' }}>
      <p>
        Don't have an account? <Link to="/signup" style={{ color: '#d4af37' }}>Register</Link>
      </p>
      <div className='mb-3'>
        <label className='form-label' htmlFor='credential' style={{ fontSize: '20px', margin: '0' }}>
          Email or Username:
        </label>
        <input
          type='text'
          className='form-control'
          id='credential'
          name='credential'
          placeholder='email@example.com or username'
          value={form.credential}
          onChange={handleChange}
          style={{ width: '50%' }}
          required
        />
      </div>
      <div className='mb-3'>
        <label className='form-label' htmlFor='password' style={{ fontSize: '20px', margin: '0' }}>Enter a Password:</label>
        <input
          type={form.showPassword ? 'text' : 'password'}
          className='form-control'
          id='password'
          name='password'
          placeholder='password'
          value={form.password}
          onChange={handleChange}
          style={{ width: '50%' }}
          required
        />
        <div>
          <input
            type='checkbox'
            id='showPassword'
            name='showPassword'
            checked={form.showPassword}
            onChange={handleChange}
            style={{ marginRight: '5px' }}
          />
          <label htmlFor='showPassword' style={{ fontSize: '14px', margin: '0' }}>Show Password</label>
        </div>
      </div>
      {(error || authError) && <div className='error' style={{ color: 'red' }}>{error || authError}</div>}
      <button type='submit' className='btn btn-primary' disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Log In'}
      </button>
    </form>
  );
};

export default AuthForm;
