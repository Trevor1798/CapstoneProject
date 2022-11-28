import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router"
import { createComment, getComment } from "../../store/comment"

const CreateComment = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {imageId} = useParams()
    const user = useSelector(state => state.session.user)

    const [description, setDescription] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const comment = {
            description,
            user_id: user.id,
            image_id: imageId
        }
        console.log("this is comments in component", comment)
        dispatch(createComment(comment)).then(() => dispatch(getComment()))

    }

        return (
            <div className="create-comment-wrapper">
                <form className="create-comment">
                    <textarea className="comment-description" value={description}
                                onChange={(e) => setDescription(e.target.value)}/>
                    <button className="create-submit" onClick={handleSubmit} >Leave a Comment</button>

                </form>
            </div>

        )
}


export default CreateComment
