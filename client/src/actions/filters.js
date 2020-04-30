import * as types from '../constants/ActionTypes'

export const setTextFilter = (text = '') => ({
    type: types.SET_TEXT,
    text
})
export const sortByAmount = () => ({ 
    type: types.SORT_BY_AMOUNT 
})
export const sortByDate = () => ({ 
    type: types.SORT_BY_DATE 
})
export const setStartDate = (startDate) => ({ 
    type: types.SET_START_DATE, 
    startDate 
})
export const setEndDate = (endDate) => ({ 
    type: types.SET_END_DATE, 
    endDate 
})