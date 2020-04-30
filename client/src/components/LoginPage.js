import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'

class LoginPage extends React.Component {
    isLoginGoogle = () => window.open('/auth/google', '_self')
    isLoginFacebook = () => window.open('/auth/facebook', '_self')
    isLoginTwitter = () => window.open('/auth/twitter', '_self')
    isLoginGithub = () => window.open('/auth/github', '_self')

    render() {
        return (
            <Fragment>
                {!this.props.auth.user ? (
                    <div className='login-page'>
                        <div className='login-page-inner'>
                            <h1 className='mb-3'>Expensify App</h1>
                            <p className='mb-5'>It's time to get your expenses under control.</p>
                            <Button onClick={this.isLoginGoogle} block variant="danger">Signin with Google</Button>
                            <Button onClick={this.isLoginFacebook} block variant="primary">Signin with Facebook</Button>
                            <Button onClick={this.isLoginTwitter} block variant="info">Signin with Twitter</Button>
                            <Button onClick={this.isLoginGithub} block variant="secondary">Signin with Github</Button>
                        </div>
                    </div>
                ) : (
                    this.props.history.push('/dashboard')
                )}
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(LoginPage)