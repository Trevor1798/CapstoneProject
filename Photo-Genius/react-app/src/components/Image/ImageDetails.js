import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { deleteImage, getImage } from "../../store/image"
import { useParams } from "react-router"


const ImageDetails = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {imageId} = useParams()
    const user = useSelector(state => state.session.user)
    const images = useSelector(state => state.images)
    console.log('these are my images', images)
    const image_ids = images[imageId]
    const imageOwner = image_ids?.user_id
    console.log('imageowner', imageOwner)
    console.log('users', user.first_name)

    console.log('images ids', image_ids)

    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(deleteImage(imageId))
        history.push('/explore')

    }


    useEffect(() =>{
        dispatch(getImage())
    }, [dispatch])

    return (
        <div className='image-details-wrapper'>
            <div className='image-detail'>
                <img className='image' src={image_ids?.image_url} onError={e => e.currentTarget.src = ''}></img>
            </div>
            <div className="image-profile-details">
                {user.id === image_ids?.id && (
                    <div className="update-delete-wrapper">
                        <div className="update-image">
                        <i className="fa-regular fa-pen-to-square" onClick={() => history.push(`/images/${image_ids?.id}/edit`)}></i>
                        </div>
                        <div className='delete-image-wrapper'>
                        <i className="fa-solid fa-trash" onClick={() => handleDelete(image_ids?.id) }></i>
                        </div>
                    </div>
                )}
                </div>

        <div className="below-image-wrapper">
            <div className="user-description">
            <i className="fa-solid fa-user-tie"></i>
            <div className="user-name">
                {user?.id === imageOwner && (
                    <div>{user?.first_name}</div>
                )}
            </div>
            <div className="image-title">{image_ids.title}</div>
            <div className="image-description">{image_ids.description}</div>
            </div>

        </div>

        </div>

    )


}

export default ImageDetails
