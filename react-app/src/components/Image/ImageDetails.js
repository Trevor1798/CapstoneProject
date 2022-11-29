import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { deleteImage, getImage } from "../../store/image"
import { useParams } from "react-router"
import { getComment } from "../../store/comment"
// import {CommentCard} from "../Comments/CommentCard"
import './ImageCSS/ImageDetails.css'
import CommentCard from "../Comments/CommentCard"
import CreateComment from "../Comments/CreateComment"
import { getUser } from "../../store/user"


const ImageDetails = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {imageId} = useParams()
    const user = useSelector(state => state.session.user)
    const images = useSelector(state => state.images)
    const commentsObj = useSelector(state => state.comments)
    const users = useSelector(state => state.users)


    const imagesArr = Object.values(images)
    const comment = Object.values(commentsObj)
    const filterComment = comment?.filter(comment => comment?.image_id === parseInt(imageId))

    // console.log('filteredcomments', filterComment[0]?.description)
    const image_ids = images[imageId]
    const imageOwner = users[image_ids?.user_id]

    console.log('these are my users', users)
    console.log('these are my images',imageOwner)
    // console.log('imageowner', filterComment)
    // console.log('users', user?.first_name)
    // console.log('images ids', image_ids)
    // console.log('23048242842984902', comment)

    const handleDelete = () => {
        // e.preventDefault()
        dispatch(deleteImage(imageId)).then(() =>{
            history.push('/explore')
        })

    }


    useEffect(() =>{
        dispatch(getImage())
        dispatch(getComment())
        dispatch(getUser())
    }, [dispatch])

    return (
        <div className='image-details-wrapper'>
            <div className='image-detail'>
                <img className='image' src={image_ids?.image_url} onError={e => e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png"}></img>
            </div>
            <div className="image-profile-details">
                {imageOwner?.id === user?.id && (
                    <div className="update-delete-wrapper">
                        <div className="update-image">
                        <i className="pen fa-regular fa-pen-to-square" onClick={() => history.push(`/images/${image_ids?.id}/edit`)}></i>
                        </div>
                        <div className='delete-image-wrapper'>
                        <i className="trash fa-solid fa-trash" onClick={() => handleDelete(image_ids?.id) }></i>
                        </div>
                    </div>
                )}
                </div>

        <div className="below-image-wrapper">
            <div className="user-description">
            <i className="user fa-solid fa-user-tie"></i>
            <div className="user-name">
                <div>{imageOwner?.first_name}</div>
            </div>
            <div className="image-title">{image_ids?.title}</div>
            <div className="image-description">{image_ids?.description}</div>
            </div>
            <div className="views-faves-comments-wrapper">{filterComment?.length} comments</div>
            <div className='comments-wrapper'>
                        {/* <CommentCard comment={comment}/> */}
                    {filterComment?.map((comment) => (
                        <div key={comment?.id}>
                        <CommentCard comment={comment}/>
                        {/* <div className="comments">{comment?.description}</div> */}
                        </div>
                    ))}

                </div>
            <div className="create-comment-detail">
                <CreateComment/>
            </div>
        </div>

        </div>

    )


}

export default ImageDetails
