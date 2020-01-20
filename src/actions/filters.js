    //SET_TEXT
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})
  
  //SORTBYAMOUNT
export const sortByAmount = () => ({
    type:'SORT_BY_AMOUNT'
})
  
  //SORTBYDATE
export const sortByDate = () => ({
    type:'SORT_BY_DATE'
})
  
export const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
})
  
export const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
})
  