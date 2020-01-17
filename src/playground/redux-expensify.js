import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = ({ description = '', note ='', amount = 0, createdAt = 0} = {}) => ({
  type: 'ADD_EXPENSE',
  expense:{
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})

const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})


const expensesReducer = (state = [], action) => {
  switch(action.type){
    case 'ADD_EXPENSE':
      return [...state, action.expense]
    case 'REMOVE_EXPENSE':
      return state.filter((item) => {
        return item.id !== action.id
      })
    default:
      return state;
  }
}

const filtersDefault = {
  text:'',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = ( state = filtersDefault, action) => {
  switch(action.type){
    default: 
      return state
  }
}

const store = createStore(
  combineReducers(
    {
      expenses: expensesReducer,
      filters: filtersReducer
    }
  )
);

store.subscribe(() => {
  console.log(store.getState());
})

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100}));
const expenseTwo = store.dispatch(addExpense({description: 'Groceries', amount: 200}));

store.dispatch(removeExpense({ id: expenseOne.expense.id}))

const demoState = {
  expenses: [{
    id: 'PJOI',
    description: 'January Rent',
    note: 'This was final payment',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
}