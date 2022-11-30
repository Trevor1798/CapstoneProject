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


    console.log('dfefefeffefe', commentOwner?.id, user?.id)
    console.log('COMMENT IDS--------')


    const [description, setDescription ] = useState(comment?.description)
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
            <img className="user-comments" src='https://freesvg.org/img/abstract-user-flat-4.png'></img>
            <div className="comments-user">
                {commentOwner?.first_name}{' '}{commentOwner?.last_name}
            </div>
            <div className="edit-comments">
                {commentOwner?.id === user?.id && (
                    <div className='edit-comments'>
                        {!canEdit ?
                        <>
                        <div className="edit-comment" onClick={() => setCanEdit(true)}>Edit your comment</div>
                        <div className="delete-comment" onClick={() => dispatch(deleteComment(comment?.id))}>Delete Comment</div>
                        </>
                        :
                        <>
                        <div className="delete-comment-false" onClick={() => setCanEdit(false)}></div>
                        <div className="edit-comment-false" onClick={() => dispatch(deleteComment(comment?.id))}></div>
                        </>
                        }
                        </div>
                )}
            </div>

        <div className="edit-comment-wrapper">

            <div className="errors">

            </div>
            <div className="edit-commentsss">
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
