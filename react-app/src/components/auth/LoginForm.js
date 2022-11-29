import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css'

const LoginForm = () => {
  let history = useHistory()
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='login-wrapper'>

    <img className='background-image' src='https://live.staticflickr.com/3829/14240294606_8a157ddfc2_b.jpg'></img>
    <div className='login-container'>
    <form class='login-form' onSubmit={onLogin}>
      <div className='logo'>
      <div className='login-genius-logo1'>•</div>
      <div className='login-genius-logo2'>•</div>
      </div>
      <div className='login-welcome'>Log in to Photo-Genius</div>
      <div classname='error-wrapper'>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
          ))}
      </div>
      <div className='email'>
        <input className='email-input'
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
          />
      </div>
      <div className='password'>
        <input className='password-input'
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
          />
        <button className='login-button' type='submit'>Login</button>
      </div>
      <div className='demo-user'>
        <button className='demo' type="submit" onClick={() => {setEmail('demo@aa.io'); setPassword('password');}}>Demo User</button>
      </div>
      <div className='signup-wrapper'>
        <div className='signup-welcome'>Not a member yet?</div>
        <div className='redirect' onClick={() => history.push('/sign-up')}>Sign up here</div>
      </div>
    </form>
    </div>
      </div>
  );
};

export default LoginForm;
