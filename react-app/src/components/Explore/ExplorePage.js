import './ExplorePage.css'
import { getImage } from '../../store/image'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import ImageCard from '../Image/ImageCard'
import { getComment } from '../../store/comment'
const ExplorePage = () => {
    let dispatch = useDispatch()
    let history = useHistory()
    const imagesObj = useSelector(state => state.images)
    const commentObj = useSelector(state => state.comments)
    let images = Object.values(imagesObj)
    let comment = Object.values(commentObj)
    console.log('imagesObj', comment)

    useEffect(() => {
        dispatch(getImage())
        dispatch(getComment())
    },[dispatch])

    return (
        <>
        <div className="explorepage-tabs-container">
        <div className="explorepage-tabs">
          <div className="explorepage-tab-explore" onClick={() => history.push(`/explore`)}>Explore</div>
          {/* <div className="explorepage-tab-tags" onClick={() => history.push(`/trending`)}>Trending</div> */}
          <div className="explorepage-tab-tags" onClick={() => history.push(`/tags`)}>Tags</div>
        </div>
      </div>
        <div className="explore-page-wrapper">
        <div className='explore-page'>
            <div className='explore-images'>
                {images.map((image) => {
                    return (

                        <div key={image?.id}>
                        <ImageCard image={image} comment={comment}/>
                        </div>
                )
            })}
            </div>
        </div>


        </div>
            </>
    )
}

export default ExplorePage
