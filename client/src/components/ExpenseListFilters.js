import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters'

class ExpenseListFilters extends React.Component {
    state = {
        focusedInput: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }

    onFocusChange = (focusedInput) => {
        this.setState(() => ({ focusedInput }))
    }

    render() {
        return (
            <div className='filters'>
                <div className='container mb-2'>
                    <div className='form-row'>
                        <div className='col-12 col-sm-6 col-md'>
                            <div className='form-input mb-2'>
                                <input type='text' className='form-control' onChange={(e) => {
                                    this.props.dispatch(setTextFilter(e.target.value))
                                }} />
                            </div>
                        </div>
                        <div className='col-12 col-sm-6 col-md'>
                            <div className='form-input mb-2'>
                                <select 
                                    name="sortBy"
                                    value={this.props.filters.sortBy} 
                                    className='form-control'
                                    onChange={(e) => {
                                        if(e.target.value === 'date') {
                                            this.props.dispatch(sortByDate())
                                        } else if(e.target.value === 'amount') {
                                            this.props.dispatch(sortByAmount())
                                        }
                                    }
                                }>
                                    <option value='date'>Date</option>
                                    <option value='amount'>Amount</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-12 col-md-auto'>
                            <div className='form-input'>
                                <DateRangePicker
                                    startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                                    startDateId="expenseStartDateId" // PropTypes.string.isRequired,
                                    endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                                    endDateId="expenseEndDateId" // PropTypes.string.isRequired,
                                    onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                    onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                                    showClearDates={true}
                                    numberOfMonths={1}
                                    isOutsideRange={() => false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)