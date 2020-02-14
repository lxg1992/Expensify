import React from 'react';
import { connect } from 'react-redux'
import expensesSelector from '../selectors/expenses'
import expensesTotal from '../selectors/expensesTotal'
import numeral from 'numeral'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons'

const ExpensesSummary = (props) => {
    const filteredExpenses = expensesSelector(props.expenses, props.filters)
    const expensesCount = filteredExpenses.length 
    const expenseOrExpenses = (count) => (count === 1 ? `${count} expense ` : `${count} expenses `)

    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
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
                </h1>
                <div className="page-header__actions">
                    <Link className="button" to='/create'><FontAwesomeIcon icon={faPlusCircle}/></Link>
                </div>
            </div>
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




