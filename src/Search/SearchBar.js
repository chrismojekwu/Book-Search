import React from 'react';

class SearchBar extends React.Component {

    handleSearch = (e) => {
        this.props.search(e.target.value);
    }

    formSubmit = (e) => {
        e.preventDefault();
        this.props.getBooks();
    }

    render(){
        return (
            <div className="searchBar">
                <form
                onSubmit={this.formSubmit}
                >
                  <label htmlFor="search">Search</label>
                  :<input 
                  onChange={this.handleSearch}
                  type="text" id="search"/>
                   <input type="submit" value="Search"/>
                </form>   
            </div>
        )
    }
}

export default SearchBar;
