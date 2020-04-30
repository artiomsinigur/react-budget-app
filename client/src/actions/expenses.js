import * as types from '../constants/ActionTypes'

export const addExpense = ({ desc = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: types.ADD_EXPENSE,
    expense: {
        desc: String(desc),
        note,
        amount,
        createdAt
    }
})

export const removeExpenseById = (id) => ({
    type: types.REMOVE_EXPENSE,
    id
})

export const editExpenseById = (id, updates) => ({
    type: types.EDIT_EXPENSE,
    id,
    updates
})

export const fetchExpensesSuccess = (expenses) => ({
    type: types.FETCH_EXPENSES_SUCCESS,
    payload: expenses
})

export const fetchExpensesError = (error) => ({
    type: types.FETCH_EXPENSES_ERROR,
    payload: error
})