import uuid from 'uuid'
import database from '../firebase/firebase'
//ADD EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const { description = '', note ='', amount = 0, createdAt = 0 } = expenseData;
    const expense = { description, note, amount, createdAt }
    database.ref(`users/${uid}/expenses`).push(expense)
      .then((ref) => {
        dispatch(addExpense({
          id: ref.key,
          ...expense
        }))
      })
      .catch((err) => {
        console.log("Error while adding expense :: ", err)
      })
  }
}
  
  //EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses`).child(id).update(updates)
      .then(() => {
        dispatch(editExpense(id,updates))
      })
      .catch((err) => {
        console.log("Error while editing expense :: ", err)
      })
  }
}
  
  //REMOVE_EXPENSE
export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

export const startRemoveExpense = ({id} = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/expenses`).child(id).remove()
      .then(() => {
        dispatch(removeExpense({id}))
      })
      .catch((err) => {
        console.log("Error while removing expense :: ", err)
      })
  }
}



export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
})

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref('expenses')
      .once('value').then((ss) => {
        const expenses = []
        ss.forEach((ssChild) => {
          expenses.push({
            id: ssChild.key,
            ...ssChild.val()
          })
        })
        dispatch(setExpenses(expenses))
      })
  }
}