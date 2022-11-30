import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router"
import { editImage } from "../../store/image"
import './ImageCSS/CreateImage.css'

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
    const [errors, setErrors] = useState([])
    const imageCheck = /\.(jpg|jpeg|png|webp|avif|gif|svg)$/

    const handleSubmit = (e) => {
        e.preventDefault()
        let image = {
            title,
            description,
            image_url,
            user_id: user.id
        }
        if(!image_url.split('?')[0].match(imageCheck)){
            errors.push('Image must be valid: jpg, jpeg, png, webp, avif, gif, svg.')
            setErrors(errors)
            return
        }
        if(image_url.length < 3 || image_url.length > 150){
            errors.push('Image URL must be between 3 and 150 characters')
            setErrors(errors)
            return
        }

        if(description.length < 5 || description.length > 255) {
            errors.push('Description must be between 5 and 255 characters.')
            setErrors(errors)
            return
        }
        if(title.length < 3 || title.length > 100){
            errors.push('Title must be between 3 and 100 characters.')
            setErrors(errors)
            return
        }
        else {
        // console.log("edit component images", images)
        dispatch(editImage(image, imageId)).then(() => {

            history.push(`/images/${imageId}/`)
        })
        }
    }

    return (
        <div className='create-image-wrapper'>
            <img className='background-image' src='https://www.pixel4k.com/wp-content/uploads/2018/09/florida-cityscape-4k_1538070288.jpg'></img>
            <div className="image-container">

            <form className="create-image-form" onSubmit={handleSubmit}>
            <div className='logo'>
            <div className='login-genius-logo1'>•</div>
            <div className='login-genius-logo2'>•</div>
            </div>
            <div className='login-welcome'>Edit your Image</div>
            <div className='errors-create-edit-image'>
            {errors.map((error, ind) => (
                <div className='errors-map' key={ind}>{error}</div>
                        ))}
            </div>
            <div className='form-wrapper'>
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
</div>
    )
}

export default EditImage
