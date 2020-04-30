import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { storeExpense } from '../api/expenses'

const Create = (props) => (
    <Fragment>
        {props.auth.user ? (
            <section className='add-expense'>
                <div className='add-expense-headline py-5 mb-4'>
                    <div className='container'>
                        <h1 className='add-expense-title'>Add Expense</h1>
                    </div>
                </div>
                <div className='container'>
                    <ExpenseForm
                        onSubmitForm={(expense) => {
                            props.dispatch(storeExpense(expense))
                            props.history.push('/dashboard')
                        }}
                        isForm='create'
                    />
                </div>
            </section>
        ) : (
            <p>Please sign in to continue</p>
        )}
    </Fragment>
)

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Create)