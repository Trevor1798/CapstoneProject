import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import "./SplashPage.css"

const SplashPage = () => {
    let history = useHistory()

    return (
        <div className='splashpage wrapper'>
            <div className='splash-nav'>
                <div className='photo-genius-logo'></div>
                <div className='search-bar'></div>
                <div className='splash-login-new' onClick={() => history.push('/signup')}>Sign Up</div>
                <div className='splash-login' onClick={() => history.push('/login')}>Log In</div>
            </div>

        <div className='splashpage'>
            <img className="splashpage-image" src="https://c4.wallpaperflare.com/wallpaper/998/700/928/anime-art-boat-night-water-wallpaper-preview.jpg"></img>
            <div className='splash-welcome'>Find your inspiration</div>
            <div className='splash-text'>Join the Photo-Genius community, home to tens of billions of photos and 2 million groups</div>
            <div className='start-for-free' onClick={() => history.push('/signup')}>Start for free</div>
        </div>

        </div>
    )
}

export default SplashPage
