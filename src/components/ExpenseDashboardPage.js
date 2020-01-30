import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary'

const ExpenseDashBoardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
    <ExpensesSummary/>
  </div>
)

export default ExpenseDashBoardPage