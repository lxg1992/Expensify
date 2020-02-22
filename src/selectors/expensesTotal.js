export default expensesArray => {
    return expensesArray
        .map(expense => expense.amount)
        .reduce((acc, val) => acc + val, 0);
};
