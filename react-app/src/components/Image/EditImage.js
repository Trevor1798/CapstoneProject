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
    const imageDetail = images[imageId]

    // console.log('trying to save state for edit image',imageDetail?.title)

    const [title, setTitle] = useState(imageDetail?.title)
    const [description, setDescription] = useState(imageDetail?.description)
    const [image_url, setImageUrl] = useState(imageDetail?.image_url)

    const handleSubmit = (e) => {
        e.preventDefault()
        let image = {
            title,
            description,
            image_url,
            user_id: user.id
        }
        // console.log("edit component images", images)
        dispatch(editImage(image, imageId))
        history.push(`/images/${imageId}/`)
    }

    return (
        <div className='edit-image-wrapper'>
            <form className="edit-image-form" onSubmit={handleSubmit}>
            <div className='errors-map'>

            </div>
            <div className='left-side-input wrapper'>
                <div className='image-url'>
                <input className='image-url-input' type='text' placeholder='Image URL' value={image_url}
                        required onChange={(e) => setImageUrl(e.target.value)}/>
                </div>
            <div className='image-title'>
                <input className='title-input' type='text' placeholder='Title' value={title}
                        required onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className='image-description'>
                <input className='description-input' type='text' placeholder='Description' value={description}
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
