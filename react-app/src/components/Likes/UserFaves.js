import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import { getAllFaves } from '../../store/favorites'
import { getImage } from '../../store/image'
import ImageCard from '../Image/ImageCard.js'
import { getUser } from '../../store/user'
import {useHistory, useParams} from 'react-router-dom'
import { getComment } from '../../store/comment'
import image from './youPageBackground.PNG'
import './UserFaves.css'

const UserFaves = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const username = useParams()

    const user = useSelector(state => state.session.user)
    const images = useSelector(state => state.images)
    const comments = useSelector(state => state.comments)
    const faves = useSelector(state => state.favorites)
    const users = useSelector(state => state.users)

    const favArr = Object.values(faves)

    const currentUser = Object.values(users).filter(user => user?.username === username?.username)[0]
    const userFaves = favArr.filter(fav => fav?.user_id === currentUser?.id)
  console.log('this is my saved faves', userFaves)
    let favImageIdArr = []
    for (let i = 0; i < userFaves.length; i++){
        favImageIdArr.push(userFaves[i].image_id)
    }
    const imagearr = Object.values(images)
    console.log('this is imagearr', imagearr)
    const userFavedImages = []

    for (let i = 0; i < imagearr.length; i++){
        if (favImageIdArr.includes(imagearr[i].id)) {
            userFavedImages.push(imagearr[i])
        }
    }

    console.log('this is my userfAVEDimages', userFavedImages)
    useEffect(() => {
        dispatch(getImage())
        dispatch(getAllFaves())
        dispatch(getUser())
        dispatch(getComment())
    },[dispatch])

    let renderImages;
    if (userFavedImages.length > 0) {
        renderImages = (
            <div className='youPage-outer-container'>
              <div className="userlikes-container">
                <div className="userlikes-inner-container">
                  <div className="userlikes-images-container">
                    {userFavedImages?.map((image) => {
                      return (
                        <>
                          <ImageCard image={image} comments={comments} faves={faves} users={users}/>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )
        } else if ((userFavedImages.length) === 0 && (currentUser?.id === user?.id)) {
          renderImages = (
            <div className='youPage-outer-container'>
              <div className='youPage-none-container'>

                <div className='youPage-text-container'>
                  <div className='youPage-text-top'>You have no favorite photos.</div>
                  <div className='youPage-text-inner-container'>
                    {/* <div className='youPage-text-middle'>{`You currently have no favorite photos. Explore photos uploaded by users in the explore page.`}</div> */}

                  </div>
                  <div className='youPage-text-inner-container'>
                    <div className='youPage-button' onClick={() => history.push(`/explore`)}>Explore</div>
                  </div>
                  <div className='youPage-text-inner-container'>
                    <img className='youPage-background' src={image} alt=''/>
                  </div>
                </div>

              </div>
            </div>
          )
        } else if ((userFavedImages.length) === 0 && (currentUser?.id !== user?.id)) {
          renderImages = (
            <div className='youPage-outer-container'>
              <div className='youPage-none-container'>

                <div className='youPage-text-container'>
                  <div className='youPage-text-top'>{`${currentUser?.first_name} ${currentUser?.last_name} does not have any favorite photos.`}</div>
                  <div className='youPage-text-inner-container'>
                    <div className='youPage-text-middle'>{`${currentUser?.first_name} ${currentUser?.last_name} currently has no favorite photos. Explore photos uploaded by users in the explore page.`}</div>

                  </div>
                  <div className='youPage-text-inner-container'>
                    <div className='youPage-button' onClick={() => history.push(`/explore`)}>Explore</div>
                  </div>
                  <div className='youPage-text-inner-container'>
                    <img className='youPage-background' src={image} alt=''/>
                  </div>
                </div>

              </div>
            </div>
          )
        }

        return (
          <>
            <div className='userlikes-top-container'>
              <div className='userlikes-image-container'>
                <img className='userlikes-top' src={'https://stsci-opo.org/STScI-01EVVDX3VNWKFGFGXYRQXCJBEN.jpg'} alt=''/>

              </div>

              <div className='userlikes-inner-container'>

                <div className='userlikes-inner-bottom'>
                  <img className='userlikes-profile' src='https://www.seekpng.com/png/full/73-730482_existing-user-default-avatar.png' alt=''></img>
                  <div className='userlikes-info'>
                    <div className='userlikes-name'>{`${currentUser?.first_name} ${currentUser?.last_name}`}</div>
                    <div className='userlikes-username'>{currentUser?.username}</div>
                  </div>
                </div>

              </div>
            </div>

            <div className='userlikes-middle-container'>
              <div className='userlikes-middle-text'>
                <div className='userlikes-middle-photostream' onClick={() => history.push(`/you/${currentUser?.username}`)}>Photostream</div>
                <div className='userlikes-middle-likes'>Favorites</div>
              </div>
            </div>

            {renderImages}

          </>
        )

      }

      export default UserFaves;
