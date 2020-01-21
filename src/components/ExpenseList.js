import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';


const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => (
            <ExpenseListItem description={expense.description} createdAt={expense.createdAt} amount={expense.amount} />
        ))}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseList);

