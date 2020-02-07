import React from 'react';
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startEditExpense, removeExpense, startRemoveExpense } from '../actions/expenses'

const EditExpensePage = (props) => {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          props.startEditExpense(props.expense.id, expense)
          props.history.push('/')
        }}
      />
                          
      <button onClick={() => {
              props.startRemoveExpense({id: props.expense.id})
              props.history.push('/')
      }}>Remove</button>
                      
    </div>
  )
}


const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch, props) => ({
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense))
})




export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage) 
