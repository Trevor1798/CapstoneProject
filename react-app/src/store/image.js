const GET_IMAGE = 'images/GET_IMAGE'
const CREATE_IMAGE = 'images/CREATE_IMAGE'
const EDIT_IMAGE = 'images/UPDATE_IMAGE'
const DELETE_IMAGE = 'images/DELETE_IMAGE'

const getImageAction = (payload) => {
    return{
        type: GET_IMAGE,
        payload
    }
}

const createImageAction = (payload) => {
    return {
        type: CREATE_IMAGE,
        payload
    }
}

const editImageAction = (payload) => {
    return {
        type: EDIT_IMAGE,
        payload
    }
}

const deleteImageAction = (payload) => {
    return {
        type: DELETE_IMAGE,
        payload
    }
}


export const getImage = () => async dispatch =>  {
        const response = await fetch('/api/images/')
        if (response.ok){
            const image = await response.json()
            dispatch(getImageAction(image.images))
        }

}

export const createImage = (payload) => async dispatch => {
    console.log('this is the payload hitting the thunk', payload)
        const response = await fetch('/api/images/new_image', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(payload)
        })
        if (response.ok){
            console.log('this is the response from hitting the backend', response)
            const image = await response.json()
            console.log('this is the new image', image)
            dispatch(createImageAction(image))
            return image
        }
}


export const editImage = (payload, imageId) => async dispatch => {
        const response = await fetch(`/api/images/${imageId}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(payload)
        })
        if (response.ok){
            const image = await response.json()
            dispatch(editImageAction(image))
        }
}

export const deleteImage = (id) => async dispatch => {
        const response = await fetch(`/api/images/${id}`,{
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
        })
        if (response.ok){
            dispatch(deleteImageAction(id))
        }
}


// Reducer
let initialState = {}
const imagesReducer = (state = initialState, action) => {
    let newState;
    switch(action.type){
        case GET_IMAGE:
            newState = {}
            action.payload.forEach((image) => {
                newState[image.id] = image
            })
        return newState
        case CREATE_IMAGE:
            newState = {...state}
            newState[action.payload.id] = action.payload
            return newState
        case EDIT_IMAGE:
            newState = {...state}
            newState[action.payload.id] = action.payload
            return newState
        case DELETE_IMAGE:
            newState = {...state}
            delete newState[action.payload]
            return newState
        default:
            return state
        }
}

export default imagesReducer
