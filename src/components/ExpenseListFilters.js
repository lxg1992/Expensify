import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByAmount, sortAscending, sortDescending } from '../actions/filters'

const ExpenseListFilters = (props) => (
    <div>
        <input 
            type="text" 
            value={props.filters.text} 
            onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value))
            }}
        />
        <select
            value={props.filters.sortBy}  
            onChange={(e) => {
                switch (e.target.value){
                    case ('date'):
                        props.dispatch(sortByDate())
                        break;
                    case ('amount'):
                        props.dispatch(sortByAmount())
                        break;
                }
        }}
        >
            <option value='date'>Date</option>
            <option value='amount'>Amount</option>
        </select>
        <select
            value={props.filters.sortType}
            onChange={(e) => {
                switch (e.target.value){
                    case ('asc'):
                        props.dispatch(sortAscending())
                        break
                    case ('desc'):
                        props.dispatch(sortDescending())
                        break
                }
            }}
        >
            <option value='desc'>Descending</option>
            <option value='asc'>Ascending</option>
        </select>
    </div>
)

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)