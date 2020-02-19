import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, {history} from './routers/AppRouter'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout} from './actions/auth';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import {firebase} from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

const store = configureStore();

const root = document.getElementById('app')
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


let hasRendered = false;
const renderApp = () => {
    if (!hasRendered){
        ReactDOM.render(jsx, root)
        hasRendered = true;
    }
}


ReactDOM.render(<LoadingPage/>, document.getElementById('app'));


firebase.auth().onAuthStateChanged((user) => {
    if(user){
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(() => {
            renderApp()
            if (history.location.pathname === '/' ){
                history.push('/dashboard')
            }
        })
        console.log(`${user} logged in`)
    } else {
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
})