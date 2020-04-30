import * as types from '../constants/ActionTypes'
import moment from 'moment'

// Reducers
// ============================
const filtersReducerDefaultState = { 
    text: '', 
    sortBy: 'date', 
    startDate: moment().startOf('month'), 
    endDate: moment().endOf('month')
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case types.SET_TEXT:
            return { ...state, text: action.text }
        case types.SORT_BY_AMOUNT:
            return { ...state, sortBy: 'amount' }
        case types.SORT_BY_DATE:
            return { ...state, sortBy: 'date' }
        case types.SET_START_DATE:
            return { ...state, startDate: action.startDate }
        case types.SET_END_DATE:
            return { ...state, endDate: action.endDate }
        default:
            return state
    }
}

export default filtersReducer