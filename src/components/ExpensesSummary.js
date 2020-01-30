import React from 'react';
import { connect } from 'react-redux'
import expensesSelector from '../selectors/expenses'
import expensesTotal from '../selectors/expensesTotal'
import numeral from 'numeral'

const ExpensesSummary = (props) => {
    const filteredExpenses = expensesSelector(props.expenses, props.filters)
    const expensesCount = filteredExpenses.length 
    const expenseOrExpenses = (count) => (count === 1 ? `${count} expense ` : `${count} expenses `)

    return (
        <div>
        {
            expensesCount > 0 ? 
                expenseOrExpenses(expensesCount) +
                'amounting to ' +
                numeral(
                    expensesTotal(
                        expensesSelector(
                            props.expenses, props.filters
                        )
                    ) / 100
                )
                .format('$0,0.00')
            :
                'No expenses match these filters'
        }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpensesSummary)




