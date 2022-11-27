import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router"
import { editImage } from "../../store/image"

const EditImage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    let {imageId} = useParams()


    const user = useSelector(state => state.session.user)
    const images = useSelector(state => state.images)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image_url, setImageUrl] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        let image = {
            title,
            description,
            image_url,
            user_id: user.id
        }
        console.log("edit component images", images)
        dispatch(editImage(image, imageId))
        history.push(`/images/${imageId}/`)
    }

    return (
        <div clssName='edit-image-wrapper'>
            <form className="edit-image-form" onSubmit={handleSubmit}>
            <div className='errors-map'>

            </div>
            <div className='left-side-input wrapper'>
                <div className='image-url'>
                <input className='image-url-input' type='text' placeholder='Image URL'
                        required onChange={(e) => setImageUrl(e.target.value)}/>
                </div>
            <div className='image-title'>
                <input className='title-input' type='text' placeholder='Title'
                        required onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className='image-description'>
                <input className='description-input' type='text' placeholder='Description'
                        required onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div className='image-create-submit'>
                <button className='create-button' type="submit">Edit Image</button>
            </div>
        </div>
    </form>
</div>
    )
}

export default EditImage
