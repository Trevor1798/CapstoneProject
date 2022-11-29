import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { createImage, getImage } from '../../store/image'
const CreateImage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const images = useSelector(state => state.images)
    const user = useSelector(state => state.session.user)

    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')
    const [image_url, setImageUrl] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        let newImage = {
            title,
            description,
            image_url,
            user_id: user.id
        }
        console.log('this is the data in the componoent', newImage)
        dispatch(createImage(newImage)).then(() => history.push('/explore'))
        // .then(() => history.push('/'))
    }

    return (
        <div className='create-image-wrapper'>
            <form className='create-image-form' onSubmit={handleSubmit}>
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
                        <button className='create-button' type="submit">Upload Image</button>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default CreateImage
