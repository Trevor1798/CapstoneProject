import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router"
import { createComment, getComment } from "../../store/comment"
import './CreateComment.css'

const CreateComment = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {imageId} = useParams()
    const user = useSelector(state => state.session.user)

    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        let errors = []
        const comment = {
            description,
            user_id: user.id,
            image_id: imageId
        }
        if (description.length < 3 || description.length > 255) {
            errors.push("Comment must be between 3 and 255 characters")
            setErrors(errors)
            return
        }
        console.log("this is comments in component", comment)
        dispatch(createComment(comment)).then(() => setDescription("")).then(() => setErrors([])).then(() => dispatch(getComment()))

    }

        return (
            <div className="create-comment-wrapper">
                <form className="create-comment">
                    <textarea className="comment-description" value={description}
                                onChange={(e) => setDescription(e.target.value)}/>
                    <div className="create-comment-button-wrap">
                                {errors.map((error) => (
                                    <div className="create-comment-error-map">{error}</div>
                                ))}
                    <button className="create-submit" onClick={handleSubmit} >Leave a Comment</button>
                    </div>

                </form>
            </div>

        )
}


export default CreateComment
