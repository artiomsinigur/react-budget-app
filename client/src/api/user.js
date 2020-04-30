import axios from 'axios'
import { fetchUserSuccess, fetchUserError } from '../actions/auth'

export function fetchUser() {
    return async (dispatch) => {
        try {
            const res = await axios.get('/api/profile') 
            dispatch(fetchUserSuccess(res.data))
            return res.data
        } catch (error) {
            dispatch(fetchUserError(error.message))
        }
    }
}