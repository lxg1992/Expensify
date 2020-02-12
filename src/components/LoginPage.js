import React from 'react'
import { connect } from 'react-redux'
import { startLogin, startGithubLogin } from '../actions/auth'

const LoginPage = (props) => {
    return(
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__title">Expense Tracker</h1>
                <p>Get your expenses in check</p>
                <button onClick={props.startLogin}>Gmail Login</button>
                <button onClick={props.startGithubLogin}>github login</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    startGithubLogin: () => dispatch(startGithubLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)
