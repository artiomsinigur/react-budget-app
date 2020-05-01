import React, { Fragment } from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpensesSummary from './ExpensesSummary'

const Dashboard = () => (
    <main className='dashboard'>
        <Fragment>
            <ExpensesSummary />
            <ExpenseListFilters />
            <ExpenseList />
        </Fragment>
    </main>
)

export default Dashboard