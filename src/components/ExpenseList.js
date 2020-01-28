import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getFilteredExpenses from '../selectors/expenses'


const ExpenseList = (props) => {
    


    return (<div>
        {props.expenses.length ? <h1>Expense List</h1> : <h3>No expenses</h3>}
        {props.expenses.map((expense) => (
            <ExpenseListItem key={expense.id} {...expense} />
        ))}
    </div>
    )
}


const mapStateToProps = (state) => {
    return {
        expenses: getFilteredExpenses(state.expenses, state.filters),
    }
}

export default connect(mapStateToProps)(ExpenseList);

