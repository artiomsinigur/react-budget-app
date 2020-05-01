import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

function Header(props) {
    const isLogout = () => window.open('/api/logout', '_self')

    return (
        <Fragment>
            <header className='header bg-light'>
                <nav className="navbar navbar-expand-lg navbar-light container">
                    <NavLink exact to="/dashboard" className='navbar-brand' activeClassName="is-active"><h1 className='h3'>Expensify App</h1></NavLink>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <span>Hi {props.auth.user.name || 'Anonymous'}</span>
                                <button className='btn btn-outline-secondary ml-3' onClick={isLogout}>Logout</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Header)