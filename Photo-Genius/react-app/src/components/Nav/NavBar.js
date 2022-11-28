
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useHistory } from 'react-router-dom';
import './NavBar.css'
import { logout } from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';

const NavBar = () => {
  let history = useHistory()
  let dispatch = useDispatch()
  const user = useSelector(state => state.session.user)

  return (
    <div className='splashpage-wrapper'>

            <div className='splashss-nav'>

                <div className='splash-top-left'>
                <div className='splash-logo-header' onClick={() => history.push('/')}>
                <div className='photo-genius-logo1'>•</div>
                <div className='photo-genius-logo2'>•</div>
                <div className='photo-genius'>photo-genius</div>
                </div>
                </div>
                <div className='upload-logout'>
                  {user && (
                    <>
                <div className='upload' onClick={() => history.push('/images/upload')}>Upload</div>
                <div className='logout' onClick={() =>dispatch(logout()).then(() =>  history.push('/'))}>Logout</div>
                <div className='camera-pic'><i className="fa-solid fa-camera"></i>
                <div className='profile-dropdown'></div>
                </div>
                </>
                )}
                </div>
            </div>
          </div>
  );
}

export default NavBar;
