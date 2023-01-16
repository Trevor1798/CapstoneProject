import { useState } from 'react';
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

  const [body, setBody] = useState("")


  const handleSearch = (e) => {
    e.preventDefault()
    history.push(`/tags/${body}`)
    setBody("")
  }

  return (
    <div className='splashpage-wrapper'>

            <div className='splashss-nav'>

                <div className='splash-top-left'>
                <div className='splash-logo-header'>
                <div className='photo-genius-logo1'>•</div>
                <div className='photo-genius-logo2'>•</div>
                <div className='photo-genius' onClick={() => history.push('/')}>photo-genius</div>
                <div className='explore' onClick={() => history.push('/explore')}>Explore</div>
                <div className='navbar-you' onClick={() => history.push(`/you/${user?.username}`)}>You</div>
                </div>
                </div>
                <div className='upload-logout'>
                <div className='navbar-search'>
            <i class="navbar-glass fa-solid fa-magnifying-glass" onClick={handleSearch}></i>
            <form>
              <input
                className='navbar-search-input'
                type="text"
                placeholder="Search photos or tags"
                value={body}
                onKeyPress={(e) => {if (e.key === "Enter") {handleSearch(e)}}}
                onChange={(e) => setBody(e.target.value)}
                />
            </form>
          </div>
                  {user && (
                    <>
                <div className='upload' onClick={() => history.push('/images/upload')}>Upload</div>
                <div className='logout' onClick={() =>dispatch(logout()).then(() =>  history.push('/'))}>Logout</div>
                <a href='https://github.com/Trevor1798/CapstoneProject/wiki' target='_blank'>
                        <i className="github2 fa-brands fa-github"></i></a>
                        <a href='https://www.linkedin.com/in/trevor-jones-458b75202/' target='_blank'>
                        <i className="linkedin2 fa-brands fa-linkedin"></i></a>
                {/* <div className='camera-pic'><i className="fa-solid fa-camera"></i> */}
                <div className='profile-dropdown'></div>
                {/* </div> */}
                </>
                )}
                </div>
            </div>
          </div>
  );
}

export default NavBar;
