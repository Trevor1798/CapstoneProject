import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import {Link} from 'react-router-dom'
import { getImage } from "../../store/image"
import { getUser } from "../../store/user"
import { getAllFaves, deleteFav, createFav } from "../../store/favorites"
import './ImageCSS/ImageCard.css'

const ImageCard = ({image, comment, imageId}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state.session.user)
    const faves = useSelector(state => state.favorites)
    const users = useSelector(state => state.users)
    const images = useSelector(state => state.images)
    const favArr = Object.values(faves)
    const comments = Object.values(comment)
    // console.log('these are me users',favArr)
    const filterComment = comments.filter(com => com?.image_id === image?.id)

    useEffect(() =>{
        dispatch(getImage())
        dispatch(getAllFaves())
        // dispatch(getComment())
        dispatch(getUser())
    }, [dispatch])
    // console.log('users', user)
    // console.log("-----------", comment?.length)
    // console.log('these are images', imageArr)
    // console.log('this is my favArr', favArr)
    // let userFaved = []
    // for (let i = 0; i < favArr.length; i++){
    //     if (favArr?.user_id === users?.id && favArr?.image_id === images?.id) {
    //         userFaved.push(favArr[i])
    //     }
    // }

    // console.log('this is the length of faves', userFaved)
    const photoFaved = favArr.filter(fav => fav?.image_id === image?.id)
    const image_ids = image[imageId]
    const imageOwner = users[image?.user_id]



    const handleCreateFav = (e) => {
        e.preventDefault()

        const data = {
            userId: user?.id,
            imageId: image?.id,

        }
        // console.log('this is create fav data', data)
        return dispatch(createFav(data)).then(() => dispatch(getAllFaves()))
    }

    const handleDeleteFav = (e) => {
        e.preventDefault()

        for (let i = 0; i < favArr.length; i++){
            if (favArr[i]?.user_id === user?.id && favArr[i]?.image_id === image?.id){
                return dispatch(deleteFav(favArr[i]?.id)).then(() => dispatch(getAllFaves()))
            }

        }
    }


    const userFaved = favArr.filter(fav => (fav?.user_id === user?.id && fav?.image_id === image?.id))
    let conditional

    if (userFaved.length > 0) {
        conditional = (
            <div className="image-card-like-container" onClick={handleDeleteFav}>
                <i className="fa-solid fa-star image-card-filled" ></i>
            </div>

        )
    } else {
        conditional = (
            <div className="image-card-like-container" onClick={handleCreateFav}>
                <i className="fa-regular fa-star image-card-unfilled"></i>
            </div>
        )
    }

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
        <div className="image-card-wrapper" key={''}>
            <Link to={`/images/${image?.id}`}>

            <img className="image-card" src={image?.image_url} alt='testing images' onError={(e) => e.currentTarget.src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png"}></img>
            <div className='images'>
                <div className="image-title">{image?.title}</div>
                <div className='image-creator'>
                        <div className="firstandlast">
                            {`by ${imageOwner?.first_name} ${imageOwner?.last_name}`}
                            <div className="images-comments">
                                <div className="image-card-like">
                                    {conditional}
                                </div>
                                <div className="image-card-length">
                                    {photoFaved?.length}
                                </div>
                            <i className="fa-regular fa-comment-dots bubble"></i>
                           <div className="filter-comments">{filterComment?.length}</div>
                            </div>
                        </div>
            </div>


                </div>
            </Link>
        </div>
    )
}


export default ImageCard
