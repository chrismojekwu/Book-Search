import React from 'react';
import Header from './Header/Header';
import SearchBar from './Search/SearchBar'
import SelectFilter from './Filter/Filter'
import Booklist from './BookList/BookList'
import './App.css';

class App extends React.Component {
  state = {
    searchTerm: "",
    filter: "partial",
    type: "all",
    results:[]
  }

  updateSearchTerm = (term) => {
    this.setState({
      searchTerm: term
    })
  }

  updateFilter = (filter) => {
    this.setState({
      filter: filter
    })
  }

  updateType = (type) => {
    this.setState({
      type: type
    })
  }

  getBooks = () => {
    const key = "ow2gGQ1G_70hMHrtXkbHrZVYxvzZ4FE9BySazIA"  
    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}&printType=${this.state.type}&filter=${this.state.filter}&key=${key.split("").reverse().join("")}`
    

    fetch(url)
    .then(response => {
      return response.json()
    })
    .then(data => {
      this.setState({
        results: data.items
      })
      console.log(data)
    })
    .catch(error => {
      alert("there was an error")
    })
  }

  render(){
    return (
      <>
        <Header/>
        <SearchBar
        search={this.updateSearchTerm}
        getBooks={this.getBooks}
        />
        <SelectFilter
        filter={this.updateFilter}
        type={this.updateType}
        />
        <Booklist
        books={this.state.results}
        />
      </>
    )
  }
}

export default App;
