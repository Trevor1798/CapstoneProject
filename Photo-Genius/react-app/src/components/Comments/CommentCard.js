import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router"
import { editImage } from "../../store/image"
import { updateComment, deleteComment } from "../../store/comment"

const CommentCard = ({comment}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {imageId} = useParams()

    const user = useSelector(state => state.session.user)
    const allUsers = useSelector(state => state.users)
    console.log('dfefefeffefe', allUsers)
    const commentArr = Object.values(comment)
    const comment_ids = commentArr[imageId]
    const commentOwner = comment_ids?.user_id
    const comments = useSelector(state => state.comments)
    // const image_ids = images[imageId]
    // const imageOwner = image_ids?.user_id
//
    console.log('COMMENT IDS--------', commentArr.user_id)
    const [description, setDescription ] = useState('')
    const [canEdit, setCanEdit] = useState(false)



    const handleClick = (e) => {
        e.preventDefault()

        let params = {
            description,
            user_id: user.id,
            image_id: imageId
        }
        dispatch(updateComment(params, comment?.id)).then(() => setCanEdit(false))
    }
    return (
        <div className="comment-wrapper">
            <i className="fa-regular fa-user"></i>
            <div className="comments-user">
                {user?.first_name}{user?.last_name}
            </div>
            <div className="edit-comments">
                {comment_ids === user?.id && (
                    <div className='edit-comment'>
                        {!canEdit && (
                        <>
                        <i className="fa-regular fa-pen-to-square" onClick={() => setCanEdit(true)}></i>
                        <i className="fa-solid fa-trash-can" onClick={() => dispatch(deleteComment(comment?.id))}></i>"
                        </>
                        )}
                        {canEdit && (
                        <>
                        <i className="fa-regular fa-pen-to-square" onClick={() => setCanEdit(false)}></i>
                        <i className="fa-solid fa-trash-can" onClick={() => dispatch(deleteComment(comment?.id))}></i>"
                        </>
                        )}
                        </div>
                )}
            </div>

        <div className="edit-comment-wrapper">

            <div className="errors">

            </div>
            <div className="edit-comment">
                {canEdit ?
                <div>
                <form className='edit-comment-form'>
                    <textarea className="edit-description" type='text' value={description}
                                onChange={(e) => setDescription(e.target.value)}/>
                    <button className='submit-edit' onClick={handleClick}>Comment</button>
                </form>
            </div>
            :
            <div className="comment-description">{comment?.description}</div>

        }
        </div>
    </div>
    </div>
    )
}


export default CommentCard
