const GET_ALL_FAVORITES = 'favorites/GET_ALL_FAVORITES'
const CREATE_FAVORITE = 'favorites/CREATE_FAVORITE'
const DELETE_FAVORITE = 'favorites/DELETE_FAVORITE'


const getAllFavesAction = (favorites) => {
    return {
        type: GET_ALL_FAVORITES,
        payload: favorites
    }
}
const createFavAction = (fav) =>  {
    return {
        type: CREATE_FAVORITE,
        payload: fav
    }
}

const deleteFavAction = (payload) => {
    return {
        type: DELETE_FAVORITE,
        payload
    }
}


export const getAllFaves = () =>  async (dispatch) => {
    const res = await fetch ('/api/favorites/')
    if (res.ok) {
        const fav = await res.json()
        dispatch(getAllFavesAction(fav))
        return fav
    }
}

export const createFav = (payload) => async (dispatch) => {
    console.log('this is my create fav inside of my thunk',payload)
    const res = await fetch('/api/favorites/create_favorite', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })

    console.log('this is the res inside createFav thunk', res)
    if (res.ok) {
        const fav = await res.json()
        dispatch(createFavAction(fav))
        return fav
    }
}


export const deleteFav = (id) => async dispatch => {
    const res = await fetch(`/api/favorites/${id}`, {
        method: 'DELETE'
    })

    if (res.ok) {
        dispatch(deleteFavAction(id))
    }
}


const initialState = {}
const favoriteReducer = (state= initialState, action) => {
    let newState = {...state}
    switch(action.type) {
        case GET_ALL_FAVORITES:
            action.payload.favorites.forEach((favorite) => {
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
