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

        <div className='image-details'>
            <div className="image-detail-wrapper">
            <div className='image-detail-container'>
                <img className='image-detail-image' src={image_ids?.image_url} onError={e => e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png"}></img>


                {imageOwner?.id === user?.id && (
                    <div>

                        <button className="edit-image-button" onClick={() => history.push(`/images/${image_ids?.id}/edit`)}>Edit your Image</button>
                        <button className="delete-image-button" onClick={() => handleDelete(image_ids?.id) }>Delete your Image</button>
                    </div>

                        )}

                </div>
                </div>
        <div className="image-detail-bottom-wrapper">
            <div className="image-detail-outer">
            <div className="image-detail-inner">

            <div className="image-detail-second-wrap">

            <div className="image-detail-card-container">
            <img className="image-detail-user-pfp" src='https://freesvg.org/img/abstract-user-flat-4.png' onError={e => e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png"}></img>
            </div>

            <div className="image-detail-user-info">
                <div className="image-detail-username">{imageOwner?.first_name}{' '}{imageOwner?.last_name}</div>
                <div className="image-detail-title">{image_ids?.title}</div>
                <div className="image-detail--description">{image_ids?.description}</div>

                </div>
            </div>
            <div className='image-detail-comment-card-container'>
            <div className="views-faves-comments-wrapper">{filterComment?.length} comments</div>
                        {/* <CommentCard comment={comment}/> */}
                    {filterComment?.map((comment) => (
                        <div key={comment?.id}>
                        <CommentCard comment={comment}/>
                        {/* <div className="comments">{comment?.description}</div> */}
                        </div>
                    ))}

                </div>
            <div className="create-comment-detail"><CreateComment/></div>
        </div>
                    </div>
        </div>
    </div>



    )


}

export default ImageDetails
