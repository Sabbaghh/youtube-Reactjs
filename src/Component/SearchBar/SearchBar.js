import React, { Component } from 'react';
import './SearchBar.css'


class SearchBar extends Component {
    state = {
        term: ''
    }

    submitHandler = (e)=>{ 
        e.preventDefault();
        this.props.searchHandler(this.state.term);
    }

    render() {
        return (
            <form className="SearchBar" onSubmit={this.submitHandler}>
                <input type="text"
                    onChange={(e) => this.setState({ term: e.target.value })}
                    value={this.state.term} />

                <button className="SearchIcon" type="submit">
                    <span> <i className="fas fa-search"></i>  </span>
                </button>

            </form>
        )
    }
}


export default SearchBar;