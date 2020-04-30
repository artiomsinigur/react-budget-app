import * as types from '../constants/ActionTypes'

const initState = []
// const initState = [{
//     msg: '',
//     typeAlert: 'success',
//     id: 'j2h34u2h3bh42uj'
// }]

export default (state = initState, action) => {
    switch (action.type) {
        case types.SET_ALERT:
            return [ ...state, action.payload ]
        case types.REMOVE_ALERT:
            return state.filter(alert => alert.id !== action.payload)
        default:
            return state;
    }
}