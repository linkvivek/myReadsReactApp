import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './search'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'
import Shelf from './shelf';

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    input : '',
    Books: {
      currentlyReading:[],
      read:[],
      wantToRead:[]
    }
  }

  componentDidMount() {
    this.fetchBooks()
  }

  fetchBooks(){ BooksAPI.getAll().then((Books) => {
    this.sortBooks(Books)
  })
}


sortBooks = (Books) => {
  let books_arr = {}
  books_arr['currentlyReading'] = Books.filter(Books => Books.shelf === 'currentlyReading')
  books_arr['read'] = Books.filter(Books => Books.shelf === 'read')
  books_arr['wantToRead'] = Books.filter(Books => Books.shelf === 'wantToRead')
  this.setState({Books: books_arr})
}

flattenBooks = () => [...this.state.Books.currentlyReading, ...this.state.Books.read, ...this.state.Books.wantToRead]


  render() { 
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                <Search Books = {this.flattenBooks()} updateShelf = {this.updateShelf}/>
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
            {/* <ListBooks Books = {this.state.Books} updateShelf = {this.updateShelf}/> */}
            {/* { console.log('here')} {console.log(this.state.Books.currentlyReading)} */}
            <Shelf Books = {this.state.Books.currentlyReading} updateShelf = {this.updateShelf} header={'Currently Reading'}/>
            <Shelf Books = {this.state.Books.wantToRead} updateShelf = {this.updateShelf} header={'Want To Read'}/>
            <Shelf Books = {this.state.Books.read} updateShelf = {this.updateShelf} header={'Read'}/>
            
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }

    updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => this.fetchBooks())
  }

}

export default BooksApp
