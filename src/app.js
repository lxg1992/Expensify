import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

const store = configureStore();


store.dispatch(addExpense(
    {
        description: 'Water bill', 
        amount: 4500,
        createdAt: 2000
    }
))

store.dispatch(addExpense(
    {
        description: 'Gas bill',
        amount: 9000,
        createdAt: 3000
    }
))

store.dispatch(addExpense(
    {
        description: 'Rent',
        amount: 109000,
        createdAt: 2500
    }
))

store.dispatch(setTextFilter(''))

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));