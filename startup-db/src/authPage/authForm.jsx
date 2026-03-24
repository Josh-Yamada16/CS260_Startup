import React, { useState } from 'react';
import './authPage.css'; // Use your existing styles

const AuthForm = ({ onAuth }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    name: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup && form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    // Call parent handler with form data and mode
    onAuth({ ...form, mode: isSignup ? 'signup' : 'login'/*, authToken*/ });
  };

  return (
    <form onSubmit={handleSubmit} style={{ lineHeight: '20px'}}>
      <p>
        {isSignup
          ? <>Already have an account? <a href="#" style={{ color: '#d4af37' }} onClick={() => setIsSignup(false)}>Log In</a></>
          : <>Don't have an account? <a href="#" style={{ color: '#d4af37' }} onClick={() => setIsSignup(true)}>Register</a></>
        }
      </p>
      <div className='mb-3'>
        <label className='form-label' htmlFor='username' style={{ fontSize: '20px', margin: '0' }}>Enter a Username:</label>
        <input
          type='text'          
          className='form-control'
          name='username'
          placeholder='username'
          value={form.username}
          onChange={handleChange}
          style={{ width: '50%'}}
          required
        />
      </div>
      {isSignup && (
        <div className='mb-3'>
          <label className='form-label' htmlFor='email' style={{ fontSize: '20px', margin: '0' }}>Enter an Email Address:</label>
          <input
            type='email'
            className='form-control'
            name='email'
            placeholder='email@example.com'
            value={form.email}
            onChange={handleChange}
            style={{ width: '50%'}}
            required
          />
        </div>
      )}
      <div className='mb-3'>
        <label className='form-label' htmlFor='password' style={{ fontSize: '20px', margin: '0' }}>Enter a Password:</label>
        <input
          type='password'
          className='form-control'
          name='password'
          placeholder='password'
          value={form.password}
          onChange={handleChange}
          style={{ width: '50%'}}
          required
        />
        <div>
          <input
            type='checkbox'
            name='showPassword'
            checked={form.showPassword}
            onChange={() => setShowPassword(!showPassword)}
            style={{ marginRight: '5px'}}
          />
          <label htmlFor='showPassword' style={{ fontSize: '14px', margin: '0' }}>Show Password</label>
        </div>
      </div>
      {isSignup && (
        <div className='mb-3'>
          <label className='form-label' htmlFor='confirmPassword' style={{ fontSize: '20px', margin: '0' }}>Confirm Password:</label>
          <input
            type='password'
            className='form-control'
            name='confirmPassword'
            placeholder='Confirm Password'
            value={form.confirmPassword}
            onChange={handleChange}
            style={{ width: '50%'}}
            required
          />
        </div>
      )}
      {error && <div className='error' style={{ color: 'red' }}>{error}</div>}
      <button type='submit' className='btn btn-primary'>
        {isSignup ? 'Sign Up' : 'Log In'}
      </button>
    </form>
  );
};

export default AuthForm;
