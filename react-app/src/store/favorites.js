const GET_ALL_FAVORITES = 'favorites/GET_ALL_FAVORITES'
const CREATE_FAVORITE = 'favorites/CREATE_FAVORITE'
const DELETE_FAVORITE = 'favorites/DELETE_FAVORITE'


const getAllFavesAction = (favorites) => {
    return {
        type: GET_ALL_FAVORITES,
        payload: fav
    }
}
const createFavAction = (fav) =>  {
    return {
        type: CREATE_FAVORITE,
        payload: fav
    }
}

const deleteFavAction = (favId) => {
    return {
        type: DELETE_FAVORITE,
        payload: favId
    }
}


export const getAllFaves = () =>  async dispatch => {
    const res = await fetch ('/api/favorites')
    if (res.ok) {
        const fav = await res.json()
        dispatch(getAllFavesAction(favorites.favorite))
        return fav
    }
}

export const createFav = (fav) => async dispatch => {
    const res = await fetch('/api/favorites/create_favorite', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(fav)
    })
    if (res.ok) {
        const fav = await res.json()
        dispatch(createFavAction(fav))
        return fav
    }
}


export const deleteFav = (favId) => async dispatch => {
    const res = await fetch(`/api/favorites/${favId}`, {
        method: 'DELETE'
    })

    if (res.ok) {
        dispatch(deleteFavAction(favId))
    }
}


const initialState = {}
const favoriteReducer = (state= initialState, action) => {
    let newState = {...state}
    switch(action.type) {
        case GET_ALL_FAVORITES:
            action.payload.forEach((favorite) => {
                newState[favorite.id] = favorite
            })
            return newState
        case CREATE_FAVORITE:
            newState[action.payload.id] = action.payload
            return newState
        case DELETE_FAVORITE:
            delete newState[action.payload]
            return newState
        default:
        return state

        }
}

export default favoriteReducer
