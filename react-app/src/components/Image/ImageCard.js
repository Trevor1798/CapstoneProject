import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import {Link} from 'react-router-dom'
import { getImage } from "../../store/image"
import { getUser } from "../../store/user"
import './ImageCSS/ImageCard.css'

const ImageCard = ({image, comment, imageId}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state.session.user)
    const users = useSelector(state => state.users)
    const images = useSelector(state => state.images)

    const comments = Object.values(comment)
    const filterComment = comment.filter(com => com?.image_id === image?.id)

    // console.log('users', user)
    // console.log("-----------", comment?.length)
    useEffect(() =>{
        dispatch(getImage())
        // dispatch(getComment())
        dispatch(getUser())
    }, [dispatch])

    const image_ids = image[imageId]
    const imageOwner = users[image?.user_id]
    console.log('trying to get iMMAGE ID', imageOwner)



    // let imageArr = Object.values(image)
    // let imageOwner = user[image?.userId]
    // if (image.user_id === user.id){
    //     firstname = user[first_name]
    //     lastname = user[last_name]
    // }
    // console.log("images from useselector", imageArr[image.image_url])
    // console.log({"first": user.first_name, "second":user.last_name})
    // console.log('these are my images', image.image_url)
    return (
        <div className="image-card-wrapper" onClick={() => history.push(`/images/${image?.id}`)}>
            <Link to={`/images/${imageId}`}/>
            <img className="image-card" src={image?.image_url} alt='testing images' onError={(e) => e.currentTarget.src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png"}></img>
            <div className='images'>
                <div className="image-title">{image?.title}</div>
                <div className='image-creator'>
                        <div className="firstandlast">
                            {`by ${imageOwner?.first_name} ${imageOwner?.last_name}`}
                            <div className="images-comments">
                            <i className="fa-regular fa-comment-dots"></i>
                            {filterComment?.length}
                            </div>
                        </div>
            </div>

                
                </div>
        </div>
    )
}


export default ImageCard
