import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchUser } from '../api/user'
import { withRouter } from 'react-router-dom'

class Header extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchUser())
    }

    isLogout = () => window.open('/api/logout', '_self')

    renderLogin = () => {
        const { user } = this.props.auth
        if (user) {
            return ( 
                <div>
                    <span>Hi {user.name || 'Anonymous'}</span>
                    <button className='btn btn-outline-secondary ml-3' onClick={this.isLogout}>Logout</button>
                </div>
            )
        } else {
            this.props.history.push('/login')
        }
    }

    render() {
        return (
            <Fragment>
                {this.props.auth.user && (
                    <header className='header bg-light'>
                        <nav className="navbar navbar-expand-lg navbar-light container">
                            <NavLink exact to="/dashboard" className='navbar-brand' activeClassName="is-active"><h1 className='h3'>Expensify App</h1></NavLink>

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        {this.renderLogin()}
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </header>
                )}
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default withRouter(connect(mapStateToProps)(Header))