import React , { Fragment } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Header from '../components/Header'

function PrivateRoute({ isAuth, children, ...rest }) {
    return (
        <Route 
            {...rest} 
            render={() => (
            isAuth ? (
                <Fragment>
                    <Header />
                    children
                </Fragment>
            ) : (
                <Redirect to="/" />
            )
        )} />
    )
}

const mapStateToProps = (state) => ({
    isAuth: !!state.auth.user
})

export default connect(mapStateToProps)(PrivateRoute)