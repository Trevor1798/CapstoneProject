import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import "./SplashPage.css"

const SplashPage = () => {
    let history = useHistory()
    const user = useSelector(state => state.session.user)

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
                    {!user && (
                <>
                <div className='splash-login' onClick={() => history.push('/login')}>Log In</div>
                <div className='splash-login-new' onClick={() => history.push('/sign-up')}>Sign Up</div>
                </>
                )}
                </div>
            </div>

        <div className='splashpage'>
            <img className="splashpage-image" src="https://www.pixel4k.com/wp-content/uploads/2021/08/aerial-view-skyline-of-singapore-4k_1629228074-2048x1365.jpg"></img>

            <div className='text-wrapper'>
            <div className='splash-welcome'>Find your inspiration.</div>
            <div className='splash-text'>Join the Photo-Genius community, home to tens of billions of photos and 2 million groups</div>
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