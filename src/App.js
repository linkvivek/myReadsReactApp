import React from 'react'
import './App.css'
import Search from './search'
import * as BooksAPI from './BooksAPI'
import Shelf from './shelf';
// import store from './store'
import fetchBooks from './store/action'
import {connect} from 'react-redux'
import { Route } from 'react-router-dom';
import {Link} from 'react-router-dom'; //setup back button

class BooksApp extends React.Component {

  componentDidMount() {
    this.props.fetchBooks()
  }


// flattenBooks = () => [...this.props.books_arr.currentlyReading, ...this.props.books_arr.read, ...this.props.books_arr.wantToRead]

  render() { 
    // console.log('props',this.props)
      return (
      <div className="app">
            <Route path = "/search" render = {({history}) => (
              <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to = "">close</Link>
                <Search updateShelf = {this.updateShelf}/>
              </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
            )}/>
            <Route exact path = '/' render = {({history}) => (
              <div className="list-books">
              <div className="list-books-title">
              <h1>MyReads</h1>
              </div>            
                <Shelf header={'Currently Reading'} name = {'currentlyReading'}/>
                <Shelf header={'Want To Read'} name = {'wantToRead'}/>
                <Shelf header={'Read'} name = {'read'}/>

            <div className="open-search">
              <Link to = "/search">Add a book</Link>
            </div>
          </div>
        )}/> 
      </div>
    )
  }


}

export default connect(null, { fetchBooks }) (BooksApp)
