import * as types from '../constants/ActionTypes'

const initState = {
    user: null,
    error: null,
}

export default (state = initState, action) => {
    switch (action.type) {
        case types.FETCH_USER_SUCCESS:
            return {
                ...state,
                user: action.payload || false,
            }
        case types.FETCH_USER_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}