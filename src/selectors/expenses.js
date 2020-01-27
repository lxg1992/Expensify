import moment from 'moment'
  
  //Get visible expenses

export default (expenses, {text, sortBy, startDate, endDate, sortType}) => {
  return expenses.filter( (expense) => {
    const createdAtMoment = moment(expense.createdAt)
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true 
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