import React, { Fragment } from 'react'
import Toast from 'react-bootstrap/Toast';
import { connect } from 'react-redux'

function AlertComponent({ alerts }) {
    return (
        <Fragment>
            <div
                style={{
                    position: 'absolute',
                    right: '10px',
                    bottom: '10px',
                }}
            >
                {
                    alerts !== null &&
                    alerts.length > 0 &&
                    alerts.map(alert => (
                        // Key should be given on direct children
                        <Toast key={alert.id}>
                            <Toast.Body className={`bg-${alert.typeAlert} text-white`}>{alert.msg}</Toast.Body>
                        </Toast>
                    ))
                }
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    alerts: state.alert
})

export default connect(mapStateToProps)(AlertComponent)