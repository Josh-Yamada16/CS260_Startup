import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';

const SignupForm = ({ onSignup, error: signupError, isSubmitting }) => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
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

    if (!form.username.trim()) {
      setError('Username is required');
      return;
    }

    if (!form.email.trim()) {
      setError('Email is required');
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError('');
    onSignup(form);
  };

  return (
    <form className='signup-form' onSubmit={handleSubmit} style={{ lineHeight: '20px' }}>
      <h5 className='signup-subtitle'>Create your account.</h5>
      <div className='mb-3'>
        <label htmlFor='signup-username' className='form-label username-label'>Enter a Username:</label>
        <input
          type='text'
          className='form-control username-input'
          id='signup-username'
          name='username'
          placeholder='username'
          value={form.username}
          onChange={handleChange}
          required
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='signup-email' className='form-label email-label'>Enter an Email Address:</label>
        <input
          type='email'
          className='form-control email-input'
          id='signup-email'
          name='email'
          placeholder='email@example.com'
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='signup-password' className='form-label password-label'>Enter a Password:</label>
        <input
          type={form.showPassword ? 'text' : 'password'}
          className='form-control password-input'
          id='signup-password'
          name='password'
          placeholder='Password'
          value={form.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='signup-confirm-password' className='form-label confirm-label'>Confirm Password</label>
        <input
          type={form.showPassword ? 'text' : 'password'}
          className='form-control confirm-input'
          id='signup-confirm-password'
          name='confirmPassword'
          placeholder='Confirm Password'
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
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
      {(error || signupError) && <div style={{ color: 'red', marginBottom: '10px' }}>{error || signupError}</div>}
      <button type='submit' className='btn btn-primary btn-lg signup-btn' style={{ marginRight: '10px' }} disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Register'}
      </button>
      <Link to='/authPage' className='login-link'>Already have an account?</Link>
    </form>
  );
};

export default SignupForm;
