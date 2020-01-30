

const expenses= [{
    id: 1,
    amount: 200,
    note:'lol',
}, {
    id: 2,
    amount: 300,
    note: 'Ok'
}, {
    id: 3,
    amount: 400,
    note: 'but'
}]

const getTotalExpenses = (expensesObject) => {
    return expensesObject.map((expense) => {
        return expense.amount
    }).reduce((acc, val) => {
        return acc + val
    })
}



const total = getTotalExpenses(expenses)

console.log(total)