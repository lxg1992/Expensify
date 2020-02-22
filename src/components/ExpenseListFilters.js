import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import {
    setTextFilter,
    sortByDate,
    sortByAmount,
    sortAscending,
    sortDescending,
    setStartDate,
    setEndDate
} from "../actions/filters";

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = calendarFocused => {
        this.setState(() => ({ calendarFocused }));
    };

    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input
                            className="text-input"
                            type="text"
                            placeholder="Search expenses..."
                            value={this.props.filters.text}
                            onChange={e => {
                                this.props.dispatch(
                                    setTextFilter(e.target.value)
                                );
                            }}
                        />
                    </div>
                    <div className="input-group__item">
                        <select
                            className="selector-input"
                            value={this.props.filters.sortBy}
                            onChange={e => {
                                switch (e.target.value) {
                                    case "date":
                                        this.props.dispatch(sortByDate());
                                        break;
                                    case "amount":
                                        this.props.dispatch(sortByAmount());
                                        break;
                                }
                            }}
                        >
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                        <select
                            className="selector-input"
                            value={this.props.filters.sortType}
                            onChange={e => {
                                switch (e.target.value) {
                                    case "asc":
                                        this.props.dispatch(sortAscending());
                                        break;
                                    case "desc":
                                        this.props.dispatch(sortDescending());
                                        break;
                                }
                            }}
                        >
                            <option value="desc">Descending</option>
                            <option value="asc">Ascending</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            showClearDates={true}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);
