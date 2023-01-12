import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { createFav, getAllFaves,  } from '../../store/favorites';
import { getImage } from '../../store/image';
import { deleteFav } from '../../store/favorites';
import './FavButton.css'


const FavButton = ({imageId}) => {

    const dispatch = useDispatch()

    const user = useSelector((state) => state.session.user)
    const faves = useSelector((state) => state.favorites)


    const favArr = Object.values(faves)

    useEffect(() => {
        dispatch(getAllImagesThunk())
        dispatch(getAllFaves())

    },[dispatch])

    const handleCreateFav = (e) => {
        e.preventDefault()

        const data = {
            userId: user.id,
            imageId: imageId,

        }

        return dispatch(createFav(data)).then(dispatch(getAllFaves()))
    }

    const handleDeleteFav = (e) => {
        e.preventDefault()

        for (let i = 0; i < favArr.length; i++){
            if (favArr[i]?.userId === user?.id && favArr[i]?.imageId === Number(imageId)) {
                return dispatch(deleteFav(favArr[i]?.id)).then(dispatch(getAllFaves()))
            }
        }
    }

    const userFaved = favArr.filter(fav => fav?.userId === user?.id && fav?.imageId === Number(imageId))

    let conditional

    if (userFaved.length > 0 ) {
        conditional = (

            <div onClick={handleDeleteFav}>
                <i className="fa-regular fa-star"></i>
            </div>

        )
    } else {
        conditional = (
            <div onClick={handleCreateFav}>
                <i className="fa-regular fa-star"></i>
            </div>
        )
    }


    return (
        <div>
            {conditional}
        </div>
    )
}

export default FavButton
