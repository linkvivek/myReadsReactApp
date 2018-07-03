import React, { Component } from 'react';
import Dropdown from './Dropdown';
import {connect} from 'react-redux'


class Shelf extends Component {

render() {
    const name = this.props.name
    let localBooks  = this.props.Books

    var loop = localBooks.filter(localBooks => localBooks.shelf === name)

    if(this.props.fromSearch) {
        let allBooks = this.props.search
    
        if(allBooks) {
            allBooks.forEach(((book, index) => {
                let foundBook = localBooks.find(b => b.id === book.id)
                book.shelf = foundBook ? foundBook.shelf : 'none'
                allBooks[index] = book
                }))
                loop = allBooks
            }
        } 

    return (
        <div>  
        <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.header}</h2>
        <div className="bookshelf-books">
        <ol className="books-grid">
             {loop && loop.length>0 && loop.map((Book) =>
                 (<li>
                    <div className="book">
                        <div className="book-top"> 
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${Book.imageLinks ? Book.imageLinks.thumbnail: ''})` }}></div>
                            <Dropdown Book = {Book} shelf = {[{ type : 'Currently Reading', id : 'currentlyReading'},{ type : 'Want To Read', id : 'wantToRead'}, { type : 'Read', id : 'read'}, { type : 'None', id : 'none'}]} />
                        </div>
                        <div className="book-title">{Book.title}</div>
                        <div className="book-authors">{Array.isArray(Book.authors)? Book.authors.join(', ') : Book.authors }</div>
                    </div>
                    </li> )
                            
                        )}

        </ol>
        </div>
        </div>
                            </div>
    )
}}

const mapStateToProps = (store) => {
      return {
        Books:store.fetch,
        search:store.search
    }
  }
  
                
            
    export default connect(mapStateToProps)(Shelf)
