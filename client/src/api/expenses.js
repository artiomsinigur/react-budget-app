import axios from 'axios'
import { addExpense, editExpenseById, removeExpenseById, fetchExpensesSuccess, fetchExpensesError } from '../actions/expenses'
import { setAlert } from '../actions/alert'

export function storeExpense(formData) {
    return async (dispatch) => {
        try {
            const res = await axios.post('/api/create', formData)
            dispatch(addExpense(res.data))
            dispatch(setAlert('Expense was created.', 'success'))
        } catch (error) {
            dispatch(setAlert(error.message, 'danger'))
        }
    }
}

export function fetchExpenses() {
    return async (dispatch) => {
        try {
            const res = await axios.get('/api/expenses')
            dispatch(fetchExpensesSuccess(res.data))
        } catch (error) {
            dispatch(fetchExpensesError(error.message))
        }
    }
}

export function fetchEditExpense(id, expense) {
    return async (dispatch) => {
        try {
            const res = await axios.post('/api/expense/update', {id, expense})
            dispatch(editExpenseById(res.data._id, res.data))
            dispatch(setAlert('Expense was updated.', 'success'))
        } catch (error) {
            dispatch(setAlert(error.message, 'danger'))
        }
    }
}

export function fetchRemoveExpense(id) {
    return async (dispatch) => {
        try {
            const res = await axios.post('/api/expense/remove', { id })
            dispatch(removeExpenseById(res.data._id))
            dispatch(setAlert('Expense was deleted.', 'danger'))
        } catch (error) {
            dispatch(setAlert(error.message, 'danger'))
        }
    }
}