import React, {Component} from 'react';

class SearchBar extends Component {


  render() {
    return (
      <div className = 'search-bar-container'>
      <form className = 'search-bar'>
        <input
        className = 'search-bar-item'
        type="text"
        placeholder="Search for..."
        value = {this.props.queryText}
        onChange = {e => this.props.searchCompanies(e.target.value)} />
      </form>
      </div>
    );
  }
}

export default SearchBar;