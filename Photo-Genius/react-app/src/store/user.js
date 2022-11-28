const GET_USERS = 'session/GET_USERS'

const getUserAction = (users) => {
    return {
        type: GET_USERS,
        users
    }
}


export const getUser = () => async dispatch => {
    const response = await fetch('/api/users/')
    if (response.ok){
        const user = await response.json()
        console.log('this is user inside thunk', user)
        dispatch(getUserAction(user))
        return user
    }
}


const initialState = {}

const userReducer = (state=initialState, action) => {
    let newState = {...state}
    switch (action.type) {
        case GET_USERS:
            action.payload.users.forEach((user) => {
                newState[user.id] = user
            })
            return newState
        default:
            return state
    }

}

export default userReducer
