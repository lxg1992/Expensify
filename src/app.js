import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';


import './styles/styles.scss';
import 'normalize.css/normalize.css';

const ExpenseDashBoardPage = () => (
  <div>
    This is from dashboard
  </div>
)

const AddExpensePage = () => (
  <div>
    This is my add expense component
  </div>
)

const EditExpensePage = () => (
  <div>
    Edit expense page
  </div>
)

const HelpPage = () => (
  <div>
    Help
  </div>
)

const NotFoundPage = () => (
  <div>
    404 - <Link to="/">Go home</Link>
  </div>
)

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink exact activeClassName="is-active" to="/">Dashboard</NavLink>
    <NavLink activeClassName="is-active" to="/create">New</NavLink>
    <NavLink activeClassName="is-active" to="/edit">Edit</NavLink>
    <NavLink activeClassName="is-active" to="/help">Help</NavLink>
    
  </header>
)

const routes = (
  <BrowserRouter>
    <div>
      <Header></Header>
      <Switch>
      <Route path="/" exact={true} component={ExpenseDashBoardPage}/>
      <Route path="/create"  component={AddExpensePage}/>
      <Route path="/edit"  component={EditExpensePage}/>
      <Route path="/help"  component={HelpPage}/>
      <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));