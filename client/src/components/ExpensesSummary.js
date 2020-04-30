import React from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import selectExpenses from '../selectors/expenses'
import selectTotalExpenses from '../selectors/expenses-total'
import numeral from 'numeral'

const ExpensesSummary = (props) => {
    return (
        <section className='summary'>
            <div className='container py-5 mb-4'>
                <div className='row align-items-center'>
                    <div className='col-12 col-sm-auto mb-4 mb-sm-0'>
                        <h2 className='summary-title'>Summary</h2>
                        <hr/>
                        <p className='summary-expenses'>Expenses: <strong>{props.expenseCount}</strong></p>
                        <p className='summary-total'>Total: <strong>{numeral(props.totalExpenses / 100).format('$0,0.00')}</strong></p>
                    </div>
                    <div className='col-12 col-sm d-flex justify-content-center justify-content-sm-end'>
                        <NavLink 
                            to="/create"
                            className='create-expense'
                        >
                            <span>Create</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return {
        totalExpenses: selectTotalExpenses(visibleExpenses),
        expenseCount: visibleExpenses.length
    }
}

export default withRouter(connect(mapStateToProps)(ExpensesSummary))