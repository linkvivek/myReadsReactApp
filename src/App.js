import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './search'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    Books : [],
    input : ''
  }

  constructor(props) {
    super(props);
  this.updateShelf = this.updateShelf.bind(this)
  }

  componentDidMount() {
    this.fetchBooks()
  }

  fetchBooks(){ BooksAPI.getAll().then((Books) => {
    this.setState(() => ({
      Books
    }))
  })
}


  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                <Search Books = {this.state.Books}/>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <ListBooks Books = {this.state.Books} updateShelf = {this.updateShelf}/>
            
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }

    updateShelf(book, shelf) {
    // alert(shelf)
    // BooksAPI.getAll().then((Books) => {
    //   this.setState(() => ({
    //     Books
    //   }))
    // })
    BooksAPI.update(book, shelf).then(() => this.fetchBooks())
  }

}

export default BooksApp
