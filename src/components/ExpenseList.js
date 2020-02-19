import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getFilteredExpenses from '../selectors/expenses'


const ExpenseList = (props) => {
    return (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
        {props.expenses.map((expense) => (
            <ExpenseListItem key={expense.id} {...expense} />
            ))}
        {!props.expenses.length && (
        <div className="list-item--message">
            <span>No expenses</span>
        
        </div>
        
        )}
        </div>
    </div>
    )
}


const mapStateToProps = (state) => {
    return {
        expenses: getFilteredExpenses(state.expenses, state.filters),
    }
}

export default connect(mapStateToProps)(ExpenseList);

