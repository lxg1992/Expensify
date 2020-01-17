import { createStore } from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => {
  return {
    type: 'INCREMENT',
    incrementBy
  }
}

const resetCount = () => ({
  type: 'RESET'
})

const setCount = ({count}) => ({
  type: 'SET',
  count

})
const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy 
})



const store = createStore((state = {count: 0}, action) => {
  switch(action.type){
    case 'INCREMENT':
      return{
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;    
  }

})

const unsub = store.subscribe(() => {
  console.log(store.getState());

})

store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
})

store.dispatch(decrementCount({decrementBy:11}))

store.dispatch(setCount({
  count: 15
}) )

store.dispatch(incrementCount())

store.dispatch(resetCount())

store.dispatch(incrementCount()) 

