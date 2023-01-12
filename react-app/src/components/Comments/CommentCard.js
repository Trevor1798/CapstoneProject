import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router"
import { editImage } from "../../store/image"
import { updateComment, deleteComment } from "../../store/comment"
import './CommentCard.css'

const CommentCard = ({comment}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {imageId} = useParams()

    const user = useSelector(state => state.session.user)
    const users = useSelector(state => state.users)
    const comments = useSelector(state => state.comments)


    const commentArr = Object.values(comment)


    const commentOwner = users[comment?.user_id]
    // const commentOwner = comment_ids?.user_id
    // const image_ids = images[imageId]
    // const imageOwner = users[image_ids?.user_id]


 

    const [description, setDescription ] = useState(comment?.description)
    const [canEdit, setCanEdit] = useState(false)
    const [errors, setErrors] = useState([])



    const handleClick = (e) => {
        e.preventDefault()

        let params = {
            description,
            user_id: user.id,
            image_id: imageId
        }
        let errors=[]
        if (description.length < 3 || description.length > 255) {
            errors.push('Comment must be between 3 and 255 characters')
            setErrors(errors)
            return

        }
        setErrors(errors)
        dispatch(updateComment(params, comment?.id)).then(() => setCanEdit(false))
    }
    return (
        <div className="comment-card-wrapper">
            <img className="comment-card-pic" src='https://freesvg.org/img/abstract-user-flat-4.png'></img>
            <div className="comment-card-container">

            <div className="comment-card-inner-container">

            <div className="comment-card-name">
                {commentOwner?.first_name}{' '}{commentOwner?.last_name}
            </div>
                {commentOwner?.id === user?.id && (
                    <div className="comment-card-edit-delete-container">

                        {!canEdit ?
                        <>
                        <i className="edit-comment fa-solid fa-square-pen" onClick={() => setCanEdit(true)}></i>
                        <i className="delete-comment fa-sharp fa-solid fa-trash" onClick={() => dispatch(deleteComment(comment?.id))}></i>
                        </>
                        :
                        <>
                        <div className="edit-comment" onClick={() => setCanEdit(false)}></div>
                        <div className="delete-comment" onClick={() => dispatch(deleteComment(comment?.id))}></div>
                        </>
                        }
                </div>
                )}
            </div>

                {canEdit ?

                <form className='edit-comment-form'>


                    <textarea className="comment-card-edit-description" type='text' value={description}
                                onChange={(e) => setDescription(e.target.value)}/>
                    <div className="edit-comment-button-container">
                        <div className="error-map-comment-card">
                                {errors.map((error) => (
                                    <div className="comment-error">{error}</div>
                                ))}
                    </div>
                    <button className='comment-card-button' onClick={handleClick}>Comment</button>
                    </div>
                </form>
                :
                <div>
                <div className="comment-card-description">{comment?.description}</div>
                </div>
            }
        </div>
    </div>
    )
}


export default CommentCard
