const GET_ALL_TAGS = 'tags/GET_ALL_TAGS'
const CREATE_TAG = 'tags/CREATE_TAG'
const DELETE_TAG = 'tags/DELETE_TAG'


const getAllTagsAction = (tags) => {
    return {
        type: GET_ALL_TAGS,
        payload: tags
    }
}

const createTagAction = (tag) => {
    return {
        type: CREATE_TAG,
        payload: tag
    }
}

const deleteTagAction = (tagId) => {
    return {
        type: DELETE_TAG,
        payload: tagId
    }
}

export const getAllTags = () => async dispatch => {
    const res = await fetch ('/api/tags')

    if (res.ok) {
        const tags = await res.json()
        dispatch(getAllTagsAction(tags.tags))
        return tags
    }
}


export const createTags = (tag) => async dispatch => {
    const res = await fetch('/api/tags/create_tag', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(tag)
    })
    if (res.ok) {
        const tag = await res.json()
        dispatch(createTagAction(tag))
        return tag
    }
}

export const deleteTag = (tagId) => async dispatch => {
    const res = await fetch(`/api/tags/${tagId}`, {
        method: 'DELETE'
    })
    if (res.ok) {
        dispatch(deleteTagAction(tagId))

    }
}


const initialState = {}
const tagReducers = (state = initialState, action) => {
    let newState = {...state}
    switch(action.type) {
        case GET_ALL_TAGS:
        action.payload.forEach(tag => {
            newState[tag.id] = tag
        })
        return newState
        case CREATE_TAG:
            newState[action.payload.id] = action.payload
            return newState
        case DELETE_TAG:
            delete newState[action.payload]
            return newState
        default:
            return state
    }
}


export default tagReducers
