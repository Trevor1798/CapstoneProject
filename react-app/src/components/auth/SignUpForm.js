import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignupForm.css'

const SignUpForm = () => {
  let history = useHistory()
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password, first_name, last_name)).then(() => history.push('/explore'));
      if (data) {
        setErrors(data)

      }
    let errors = []
    if (username.length < 4 || username.length > 50) {
      errors.push('User name must be between 4 and 50 characters')
        setErrors(errors)
        return

      }
      if (first_name.length < 3 || first_name.length > 50){
        errors.push('First name must be between 3 and 50 characters')
        setErrors(errors)
        return

      }
      if (last_name.length < 3 || last_name.length > 50) {
        errors.push('Last name must be between 3 and 50 characters')
        setErrors(errors)
        return

      }
      if (email.length < 4 || email.length > 100) {
        errors.push("Email must be between 4 and 100 characters")
        setErrors(errors)
        return

      }
      if (password.length < 6 || password.length > 50) {
        errors.push('Password must be between 6 and 50 characters')
        setErrors(errors)
        return

      }
      }
      if (password !== repeatPassword) setErrors(['Passwords do not match'])
  };

  // useEffect(() => {

  // },[username, first_name, last_name, email, password])
  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const updateLastName = (e) => {
    setLastName(e.target.value)
  }
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='signup-wrapper'>
    <img className='background-image' src='https://res.cloudinary.com/dgmw9nv61/image/upload/v1669943631/Photo-genius/900704_wyw8tq.jpg'></img>
    <div className='signup-container'>

    <form className='signup-form' onSubmit={onSignUp}>

    <div className='logo'>
      <div className='login-genius-logo1'>•</div>
      <div className='login-genius-logo2'>•</div>
        </div>
        <div className='signup-welcome'>Sign up for Photo-Genius</div>
        <div className='errors'>
        {errors.map((error, ind) => (
          <div className='errors-map' key={ind}>{error}</div>
          ))}
      </div>
      <div className='form-wrapper'>
      <div className='username'>
        <input className='username-input'
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
          placeholder='Username'
          // minlength={4}
          required
          ></input>
      </div>
      <div className='first-name'>
          <input className='first-name-input'
          type='text'
          name='first name'
          onChange={updateFirstName}
          value={first_name}
          placeholder='First name'
          required
          // minlength={3}
          ></input>
          </div>

        <div className='last-name'>
          <input className='last-name-input'
          type='text'
          name='last name'
          onChange={updateLastName}
          value={last_name}
          placeholder='Last name'
          required
          // minlength={3}
          ></input>
        </div>
        <div className='email'>
        <input className='email-input'
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
          placeholder='Email'
          required
          // minlength={4}
          ></input>
          </div>
      <div className='password'>
        <input className='password-input'
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
          placeholder='Password'
          required
          minlength={6}
          ></input>
      </div>
      <div className='-repeat-password'>

        <input className='repeat-password-input'
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          placeholder='Confirm Password'
          required={true}
          minlength={6}
          ></input>
      </div>
      <div className='below-signup'>
      <button className='signup-button' type='submit'>Sign Up</button>
          <div className='signup-bottom-wrapper'>
        <div className='signup-bottom'>Already have an account?</div>
        <div className='redirect' onClick={() => history.push('/login')}>Login here</div>
          </div>
      </div>
          </div>
    </form>
          </div>
  </div>
  );
};

export default SignUpForm;
