import React from 'react';
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startEditExpense, removeExpense, startRemoveExpense } from '../actions/expenses'

const EditExpensePage = (props) => {
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">
            Edit <em>{props.expense.description}</em>
          </h1>
        </div>
      </div>
      <div className="content-container">

        <ExpenseForm
          expense={props.expense}
          onSubmit={(expense) => {
            props.startEditExpense(props.expense.id, expense)
            props.history.push('/dashboard')
          }}
        />
        <button 
                className="button__grey"
                onClick={() => {
                props.startRemoveExpense({id: props.expense.id})
                props.history.push('/dashboard')
        }}>Remove</button>
      </div>
                          
                      
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
