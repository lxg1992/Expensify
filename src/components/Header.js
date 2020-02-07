import React from 'react';
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom';
import {startLogout} from '../actions/auth'



const Header = (props) => (
  <header>
    <h1>Expensify</h1>
    <NavLink activeClassName="is-active" to="/dashboard">Dashboard</NavLink>
    <NavLink activeClassName="is-active" to="/create">New</NavLink>
    <NavLink activeClassName="is-active" to="/help">Help</NavLink>
    <button onClick={props.startLogout}>Log out</button>
    
  </header>
)

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)