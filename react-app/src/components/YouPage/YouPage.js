import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllFaves } from "../../store/favorites";
import { getImage } from "../../store/image";
import ImageCard from "../Image/ImageCard";
import { getUser } from "../../store/user";
import { useHistory,useParams } from "react-router";
import image from './youPageBackground.PNG'
import './YouPage.css'
import { getComment } from "../../store/comment";


const YouPage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const username = useParams()

    const user = useSelector(state => state.session.user)
    const images = useSelector(state => state.images)
    const comments = useSelector(state => state.comments)
    const faves = useSelector(state => state.favorites)
    const users = useSelector(state => state.users)
    useEffect(() => {
      dispatch(getImage())
      dispatch(getAllFaves())
      dispatch(getUser())
      dispatch(getComment())
    }, [dispatch])


    const currentUser = Object.values(users).filter(user => user?.username === username?.username)[0]

    const favesArr = Object.values(faves)
    const imagesArr = Object.values(images)
    console.log('this is favesArr inside youPage comnponet', favesArr)
    const userFaves = favesArr.filter(fav => fav?.user_id === currentUser?.id)
    const userImages = imagesArr.filter(image => image?.user_id === currentUser?.id)


    let favImageArr = []

    for (let i = 0; i < userFaves.length; i++) {
        favImageArr.push(userFaves[i]?.image_id)

    }
    console.log('this is favImageArr inside of youpage', favImageArr)
    const imagearr = Object.values(images)

    console.log('imagarr.id', imagearr)

    const userFavedImages = []

    for (let i = 0; i < imagearr.length; i++) {
        if (favImageArr.includes(imagearr[i].id)) {
            userFavedImages.push(imagearr[i])
        }
    }

console.log('this is userFavedImages', userFavedImages)
    let renderImages;

    if (userImages.length > 0) {
        renderImages = (
            <div className='youPage-outer-container'>
              <div className="youPage-container">
                <div className="youPage-inner-container">
                  <div className="youPage-images-container">
                    {userImages?.map((image) => {
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
        } else if ((userImages.length === 0) && (user?.id === currentUser?.id)) {
          renderImages = (
            <div className='youPage-outer-container'>
              <div className='youPage-none-container'>

                <div className='youPage-text-container'>
                  {/* <div className='youPage-text-top'>You have no public photos.</div> */}
                  <div className='youPage-text-inner-container'>
                    {/* <div className='youPage-text-middle'>Your photostream is your public-facing portfolio. Set your photos to public using the Camera Roll to populate your photostream.</div> */}

                  </div>
                  <div className='youPage-text-inner-container'>
                    <div className='youPage-button' onClick={() => history.push(`/images/upload`)}>Upload Photo</div>
                  </div>
                  <div className='youPage-text-inner-container'>
                    <img className='youPage-background' src={image} alt=''/>
                  </div>
                </div>

              </div>

            </div>
          )
        } else if ((userImages.length === 0) && (user?.id !== currentUser?.id)) {
          renderImages = (
            <div className='youPage-outer-container'>
              <div className='youPage-none-container'>

                <div className='youPage-text-container'>
                  <div className='youPage-text-top'>{`${currentUser?.first_name} ${currentUser?.last_name} has no public photos.`}</div>
                  <div className='youPage-text-inner-container'>
                    {/* <div className='youPage-text-middle'>{`${currentUser?.first_name} ${currentUser?.last_name} currently does not have a public-facing portfolio. Explore other photos uploaded by users in the explore page.`}</div> */}
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
            <div className='youPage-top-container'>
              <div className='youPage-image-container'>
                <img className='youPage-top' src={'https://stsci-opo.org/STScI-01EVVDX3VNWKFGFGXYRQXCJBEN.jpg'}  alt=''/>

              </div>

              <div className='youPage-inner-container'>

                <div className='youPage-inner-bottom'>
                  <img className='youPage-profile' src='https://www.seekpng.com/png/full/73-730482_existing-user-default-avatar.png' alt=''></img>
                  <div className='youPage-info'>
                    <div className='youPage-name'>{`${currentUser?.first_name} ${currentUser?.last_name}`}</div>
                    <div className='youPage-username'>{currentUser?.username}</div>
                  </div>
                </div>

              </div>
            </div>

            <div className='youPage-middle-container'>
              <div className='youPage-middle-text'>
                <div className='youPage-middle-photostream'>Photostream</div>
                <div className='youPage-middle-likes' onClick={() => history.push(`/you/${currentUser?.username}/faves`)}>Favorites</div>
              </div>
            </div>

            {renderImages}

          </>
        )

      }

      export default YouPage;
