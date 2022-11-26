import './ExplorePage.css'
import { getImage } from '../../store/image'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
const ExplorePage = () => {
    let dispatch = useDispatch()
    let history = useHistory()
    const imagesObj = useSelector(state => state.images)
    console.log('imagesObj', imagesObj)
    let images = Object.values(imagesObj)

    useEffect(() => {
        dispatch(getImage())
    },[dispatch])

    return (
        <div className="explore-page-wrapper">
            <div className='explore-nav'>
                <div className='explore' onClick={() => history.push('/explore')}>Explore</div>
                <div className='trending' onClick={() => history.push('/trending')}>Trending</div>
            </div>
        <div className='explore-page'>
            <div className='explore-images'>
                {images?.map((img) => {
                    <div key={img?.id}>
                        </div>
                })}
            </div>
        </div>


        </div>
    )
}

export default ExplorePage
