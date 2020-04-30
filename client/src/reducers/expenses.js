import * as types from '../constants/ActionTypes'

// const state = [{
//     id: '123abc',
//     desc: 'January rent',
//     note: 'This was the place where we spend more',
//     amount: 105000,
//     createAt: 0
// }]

const expensesReducer = (state = [], action) => {
    switch (action.type) {
        case types.ADD_EXPENSE:
            // return state.concat(action.expense)
            return [
                ...state,
                action.expense
            ]
        case types.REMOVE_EXPENSE:
            return state.filter(expense => expense._id !== action.id)
        case types.EDIT_EXPENSE:
            return state.map(expense => {
                if (expense._id === action.id) {
                    return { ...expense, ...action.updates }
                } else {
                    return expense
                }
            })
        case types.FETCH_EXPENSES_SUCCESS:
            return [
                ...action.payload
            ]
        case types.FETCH_EXPENSES_ERROR:
            return {
                error: action.payload
            }
        default:
            return state
    }
}

export default expensesReducer