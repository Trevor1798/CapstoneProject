const GET_COMMENT = 'comments/GET_COMMENT'
const CREATE_COMMENT = 'comments/CREATE_COMMENT'
const UPDATE_COMMENT = 'comments/UPDATE_COMMENT'
const DELETE_COMMENT = 'comments/DELETE_COMMENT'

const getCommentAction = (payload) => {
    return {
        type: GET_COMMENT,
        payload
    }
}

const createCommentAction = (payload) => {
    return {
        type: CREATE_COMMENT,
        payload
    }
}

const updateCommentAction = (payload) => {
    return {
        type: UPDATE_COMMENT,
        payload
    }
}

const deleteCommentAction = (payload) => {
    return {
        type: DELETE_COMMENT,
        payload
    }
}

export const getComment = () => async dispatch => {
    const response = await fetch('/api/comments/')
    if (response.ok){
        const comment = await response.json()
        dispatch(getCommentAction(comment.comments))

    }
}

export const createComment = (payload) => async dispatch => {
    const response = await fetch('/api/comments/create-comment', {
        methods: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload)
    })
    if (response.ok){
        const newComment = await response.json()
        dispatch(createCommentAction(newComment))

    }
}

export const updateComment = (payload, commentId) => async dispatch => {
    const response = await fetch(`/api/comments/${commentId}`, {
        methods: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload)
    })
    if (response.ok){
        const editComment = await response.json()
        dispatch(updateCommentAction(editComment))
    }
}

export const deleteComment = (id) => async dispatch => {
    const response = await fetch(`/api/comments/${id}`, {
        methods: "DELETE",
        headers: {"Content-Type": "application/json"},
    })
    if (response.ok){
        dispatch(deleteCommentAction(id))
    }
}
let initialState = {}
const commentsReducer = (state = initialState, action) => {
    let newState;
    switch(action.type){
        case GET_COMMENT:
            newState = {}
            action.payload.forEach((comment) => {
                newState[comment.id] = comment
            })
        return newState
        case CREATE_COMMENT:
            newState = {...state}
            newState[action.payload.id] = action.payload
            return newState
        case UPDATE_COMMENT:
            newState = {...state}
            newState[action.payload.id] = action.payload
            return newState
        case DELETE_COMMENT:
            newState = {...state}
            delete newState[action.payload]
            return newState
        default:
            return state
        }
    }
export default commentsReducer
