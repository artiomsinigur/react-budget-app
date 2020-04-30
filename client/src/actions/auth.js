import * as types from '../constants/ActionTypes'

export const fetchUserSuccess = (user) => ({
    type: types.FETCH_USER_SUCCESS,
    payload: user
})

export const fetchUserError = (error) => ({
    type: types.FETCH_USER_ERROR,
    payload: error
})