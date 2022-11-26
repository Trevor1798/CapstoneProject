import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import {Link} from 'react-router-dom'

const ImageCard = ({image}) => {
    let dispatch = useDispatch()
    let history = useHistory()
    let user = useSelector(state => state.session.user)
    let images = useSelector(state => state.images)
    console.log('users', user)
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
        <div className="image-card-wrapper">
            {/* <Link to={`/images/${image?.id}`}/> */}
            <img className="image-card" src={image?.image_url} alt='testing images' onError={(e) => e.currentTarget.src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png"}></img>
            <div className='images'>
                <div className="image-title">{image?.title}</div>
                <div className='image-creator'>
                        <div className="firstandlast">
                            {`by ${user?.first_name} ${user?.last_name}`}
                        </div>
                    </div>
            </div>
        </div>
    )
}


export default ImageCard
