import * as types from '../constants/ActionTypes'
import { v4 as uuidv4 } from 'uuid';

export const setAlert = (msg, typeAlert, timeout = 5000) => {
    const id = uuidv4()
    return (dispatch) => {
        dispatch({
            type: types.SET_ALERT,
            payload : {
                msg,
                typeAlert,
                id
            }
        })

        setTimeout(() => dispatch(removeAlert(id)), timeout)
    }
}

function removeAlert(id) {
    return {
        type: types.REMOVE_ALERT,
        payload: id
    }
}