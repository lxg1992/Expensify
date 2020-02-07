import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from '../components/Header';
import ExpenseDashBoardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';



const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header></Header>
      <Switch>
        <Route path="/" exact={true} component={LoginPage}/>
        <Route path="/dashboard" component={ExpenseDashBoardPage}/>
        <Route path="/create"  component={AddExpensePage}/>
        <Route path="/edit/:id"  component={EditExpensePage}/>
        <Route path="/help"  component={HelpPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;