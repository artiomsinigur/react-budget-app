import React, { Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginPage from '../components/LoginPage'
import Dashboard from '../components/Dashboard'
import Create from '../components/Create'
import Edit from '../components/Edit'
import NotFoundPage from '../components/NotFoundPage'
import Alert from '../components/Alert'
import PrivateRoute from './PrivateRoute'

export default function AppRouter() {
    return ( 
        <BrowserRouter>
            <Fragment>
                <Alert />
                <Switch>
                    <Route exact path="/" component={LoginPage} />
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                    <PrivateRoute path="/create" component={Create} />
                    <PrivateRoute path="/edit/:id" component={Edit} />
                    <Route component={NotFoundPage} />
                </Switch>
            </Fragment>
        </BrowserRouter>
    )
}
