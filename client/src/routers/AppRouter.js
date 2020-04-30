import React, { Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginPage from '../components/LoginPage'
import Header from '../components/Header'
import Dashboard from '../components/Dashboard'
import Create from '../components/Create'
import Edit from '../components/Edit'
import NotFoundPage from '../components/NotFoundPage'
import Alert from '../components/Alert'

export default function AppRouter() {
    return ( 
        <BrowserRouter>
            <Fragment>
                <Alert />
                <Header />
                <Switch>
                    <Route exact path="/" component={LoginPage} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/create" component={Create} />
                    <Route path="/edit/:id" component={Edit} />
                    <Route component={NotFoundPage} />
                </Switch>
            </Fragment>
        </BrowserRouter>
    )
}