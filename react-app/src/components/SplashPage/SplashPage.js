import { useEffect } from 'react'
import {useSelector} from 'react-redux'
import {NavLink, Redirect, useHistory} from 'react-router-dom'
import "./SplashPage.css"
import { useDispatch } from 'react-redux'
import {getImage} from '../../store/image'
const SplashPage = () => {
    let dispatch = useDispatch()
    let history = useHistory()
    const user = useSelector(state => state.session.user)
    const githubLink ='https://github.com/Trevor1798/CapstoneProject/wiki'
    const linkedinLink ='https://www.linkedin.com/in/trevor-jones-458b75202/'

    const gitHubClick = () => {
        // e.preventDefault()
        <NavLink path={githubLink}/>
    }
    const linkedinClick = (e) => {
        e.preventDefault()
        return <NavLink to={linkedinLink}/>
    }

    return (
        <div className='splashpage-wrapper'>

            <div className='splash-nav'>

                <div className='splash-top-left'>
                <div className='splash-logo-header' onClick={() => history.push('/')}>
                <div className='photo-genius-logo1'>•</div>
                <div className='photo-genius-logo2'>•</div>
                <div className='photo-genius'>photo-genius</div>
                </div>
                </div>


                <div className='logins'>
                        {user && (
                    <div className='dev-info'>

                        <div className='meet-the-dev'>Meet the Dev:</div>
                        <a href='https://github.com/Trevor1798/CapstoneProject/wiki' target='_blank'>
                        <i className="github fa-brands fa-github"></i></a>
                        <a href='https://www.linkedin.com/in/trevor-jones-458b75202/' target='_blank'>
                        <i className="linkedin fa-brands fa-linkedin"></i></a>
                    </div>
                )}
                    {!user && (
                <>
                <div className='splash-login' onClick={() => history.push('/login')}>Log In</div>
                <div className='splash-login-new' onClick={() => history.push('/sign-up')}>Sign Up</div>
                </>
                )}
                </div>
            </div>

        <div className='splashpage'>
            <img className="splashpage-image" src="https://res.cloudinary.com/dgmw9nv61/image/upload/v1669943764/Photo-genius/aerial-view-skyline-of-singapore-4k_1629228074-2048x1365_z95j7o.jpg"></img>

            <div className='text-wrapper'>
            <div className='splash-welcome'>Find your inspiration.</div>
            <div className='splash-text'>Join the Photo-Genius community, home to tens of billions of</div>
            <div className='splash-text-pt2'>photos and 2 million groups</div>
            {!user && (

                <div className='start-for-free' onClick={() => history.push('/sign-up')}>Start for free</div>
            )}
            {user && (
                <div className='start-for-free' onClick={() => history.push('/explore')}>Explore</div>
            )}
            </div>

        </div>
        </div>
    )
}

export default SplashPage
