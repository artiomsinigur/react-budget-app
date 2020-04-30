import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpensesSummary from './ExpensesSummary'

const Dashboard = (props) => (
    <main className='dashboard'>
        { props.auth.user ? (
            <Fragment>
                <ExpensesSummary />
                <ExpenseListFilters />
                <ExpenseList />
            </Fragment>
        ) : (
            <p>Please sign in to continue</p>
        )}
    </main>
)

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Dashboard)