// https://github.com/zalmoxisus/redux-devtools-extension#installation
// https://www.npmjs.com/package/redux-devtools-extension

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'
import authReducer from '../reducers/auth'
import alertReducer from '../reducers/alert'

const rootReducer = combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
    auth: authReducer,
    alert: alertReducer
})

export default () => {
    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunk))
    )
}