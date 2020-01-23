

  //Get visible expenses
export default (expenses, {text, sortBy, startDate, endDate, sortType}) => {
  return expenses.filter( (expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
    const endDateMatch = typeof startDate !=='number' || expense.createdAt <= endDate
    const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase())

    return startDateMatch && endDateMatch && textMatch
  }).sort((a,b) => {
    switch( sortBy ){
      case ('date'):
        if(sortType === 'desc'){
          return a.createdAt < b.createdAt ? 1 : -1
        } else {
          return a.createdAt > b.createdAt ? 1 : -1
        }
      case ('amount'):
        if(sortType === 'desc'){
          return a.amount < b.amount ? 1 : -1
        } else {
          return a.amount > b.amount ? 1 : -1   
        }
    }
  })
}