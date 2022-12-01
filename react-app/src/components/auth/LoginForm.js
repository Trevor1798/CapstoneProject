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
    const data = await dispatch(login(email, password)).then(() => history.push('/explore'));
    if (data) {
      setErrors(["Please provide valid credentials"]);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };
  const demoUserClick = (e) => {
    e.preventDefault()
    dispatch(login("demo@aa.io", "password")).then(() => history.push('/explore'))
  }

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='login-wrapper'>

    <img className='background-image' src='https://live.staticflickr.com/3829/14240294606_8a157ddfc2_b.jpg'></img>
    <div className='login-container'>
    <form className='login-form' onSubmit={onLogin}>
      <div className='logo'>
      <div className='login-genius-logo1'>•</div>
      <div className='login-genius-logo2'>•</div>
      </div>
      <div className='login-welcome'>Log in to Photo-Genius</div>
      <div className='error-wrappers'>
        {errors.map((error, ind) => (
          <div className='error-wrapper' key={ind}>{error}</div>
          ))}
      </div>
      <div className='email'>
        <input className='email-inputs'
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
          required
          minLength={4}
          maxLength={50}
          />
      </div>
      <div className='password'>
        <input className='password-inputs'
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
          required
          minLength={4}
          maxLength={50}
          />
        <button className='login-buttons' type='submit'>Login</button>
      </div>
      <div className='demo-user'>
        <button className='demos' onClick={demoUserClick}>Demo User</button>
      </div>
      <div className='bottom-cont'>
        <div className='signup-welcomes'>Not a member yet?</div>
        <div className='redirects' onClick={() => history.push('/sign-up')}>Sign up here</div>
      </div>
    </form>
    </div>
      </div>
  );
};

export default LoginForm;
