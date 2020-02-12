import React from 'react'
import { connect } from 'react-redux'
import { startLogin, startGithubLogin } from '../actions/auth'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons'


const LoginPage = (props) => {
    return(
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__title">Expense Tracker</h1>
                <p>Get your expenses in check</p>
            
                <button className="box-layout__googleButton box-layout__button" onClick={props.startLogin}>
                    <FontAwesomeIcon icon={faGoogle}/>
                </button>
                
                <button className="box-layout__githubButton box-layout__button" onClick={props.startGithubLogin}>
                    <FontAwesomeIcon icon={faGithub}/>
                </button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    startGithubLogin: () => dispatch(startGithubLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)
