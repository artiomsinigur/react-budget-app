import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'
import { fetchExpenses } from '../api/expenses'

class ExpenseList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchExpenses())
    }

    render() {
        return (
            <div className='expenses'>
                <div className='container'>

                    <table className="table table-hover">
                        <thead className="thead-light">
                            <tr>
                            <th scope="col">Expenses</th>
                            <th scope="col" className='text-right'>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.expenses.map((expense) => {
                                    return <ExpenseListItem key={expense._id} {...expense} />
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
    }
}

// 2. Redux provides a Connect function to connect component(s) to the store.
    // First: connect() takes the STATE and PROPS 
    // Second: connect()() takes the COMPONENT
export default connect(mapStateToProps)(ExpenseList)