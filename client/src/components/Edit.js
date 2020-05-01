import React from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { fetchEditExpense, fetchRemoveExpense } from '../api/expenses'

const Edit = (props) => (
    <div>
        <section className='edit-expense'>
            <div className='edit-expense-headline py-5 mb-4'>
                <div className='container'>
                    <h1 className='edit-expense-title'>Edit Expense</h1>
                </div>
            </div>
            <div className='container'>
                <ExpenseForm
                    expense={props.expense}
                    onSubmitForm={(expense) => {
                        props.fetchEditExpense(props.expense._id, expense)
                        props.history.push('/dashboard')
                    }}
                />
                <button
                    type="button"
                    className='btn btn-danger'
                    onClick={() => {
                    props.fetchRemoveExpense(props.expense._id)
                    props.history.push('/dashboard')
                }}>
                    Remove Expense
                </button>
            </div>
        </section>
    </div>
)

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense._id === props.match.params.id),
    }
}

export default connect(mapStateToProps, { fetchEditExpense, fetchRemoveExpense })(Edit)