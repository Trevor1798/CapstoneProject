import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import {Link} from 'react-router-dom'

const ImageCard = () => {
    let dispatch = useDispatch()
    let history = useHistory()
    let user = useSelector(state => state.session.user)
    let image = useSelector(state => state.images)
    // let imageOwner = user[image?.userId]
    if (image.user_id === user.id){
        firstname = user[first_name]
        lastname = user[last_name]
    }
    console.log({"first": firstname, "second":lastname})
    return (
        <div className="image-card-wrapper">
            <Link to={`/images/${image?.id}`}/>
            <img className="image-card" src={image?.image_url} onError={src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png"}></img>
            <div className='images'>
                <div className="image-title">{image?.title}</div>
                {/* <div className='image-creator'>{image?.></div> */}
            </div>
        </div>
    )
}
