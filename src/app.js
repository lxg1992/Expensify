import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { startSetExpenses, startAddExpense, addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import './firebase/firebase';

const store = configureStore();

const root = document.getElementById('app')


// store.dispatch(addExpense(
//     {
//         description: 'Water bill', 
//         amount: 4500,
//         createdAt: 2000
//     }
// ))

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, root)
})