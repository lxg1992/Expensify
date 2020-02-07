import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, {history} from './routers/AppRouter'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { startSetExpenses, startAddExpense, addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import {firebase} from './firebase/firebase';

const store = configureStore();

const root = document.getElementById('app')
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

// store.dispatch(addExpense(
//     {
//         description: 'Water bill', 
//         amount: 4500,
//         createdAt: 2000
//     }
// ))

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered){
        ReactDOM.render(jsx, root)
        hasRendered = true;
    }
}

ReactDOM.render(<h1 style={{backgroundColor:"black", color:"white"}}>Loading...</h1>, document.getElementById('app'));





firebase.auth().onAuthStateChanged((user) => {
    if(user){
        store.dispatch(startSetExpenses()).then(() => {
            renderApp()
            if (history.location.pathname === '/' ){
                history.push('/dashboard')
            }
        })
        console.log(`${user} logged in`)
    } else {
        renderApp()
        history.push('/')
    }
})