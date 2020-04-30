import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

export default function ExpenseListItem({ _id, desc, amount, createdAt }) {
    // const formatAmount = new Intl.NumberFormat('us-US', {style: 'currency', currency: 'USD'}).format(amount / 100)
    const numeralFormat = numeral(amount / 100).format('$0,0.00a')
    return (
        <tr>
            <td className='p-0'>
                <Link to={`/edit/${_id}`} className='expenses-link'>
                    <h3 className='expenses-desc h5'>{desc}</h3>
                    <p className='expenses-published mb-0'>{moment(createdAt).format('MMM Do YYYY')}</p>
                </Link>
            </td>
            <td className='expenses-price text-right'>{numeralFormat}</td>
            {/* <td><button type="button" onClick={() => {
                dispatch(removeExpenseById(id))
            }}>Remove</button></td> */}
        </tr>
    )
}

// We don't need the state so we don't use mapStateToProps
// Export the component to have access to dispatch() props
// export default connect()(ExpenseListItem)