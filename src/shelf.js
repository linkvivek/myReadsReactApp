import React, { Component } from 'react';
import Dropdown from './Dropdown';


class Shelf extends Component {
render() {
    return (
        <div>{console.log('kkkk')} {console.log(this.props.Books)}
        <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.header}</h2>
        <div className="bookshelf-books">
        <ol className="books-grid">
             { this.props.Books.map((Book) =>
                 (<li>
                            <div className="book">
                                <div className="book-top"> 
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${Book.imageLinks ? Book.imageLinks.thumbnail: ''})` }}></div>
                                    <Dropdown updateShelf = {this.props.updateShelf}  Book = {Book} shelf = {[{ type : 'Currently Reading', id : 'currentlyReading'},{ type : 'Want To Read', id : 'wantToRead'}, { type : 'Read', id : 'read'}, { type : 'None', id : 'none'}]} />
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


                
            
    export default Shelf
