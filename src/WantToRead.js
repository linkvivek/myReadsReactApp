import React, { Component } from 'react';
import Dropdown from './Dropdown';


    class  WantToRead extends Component {
        render() {
            return (
                <div>
                <div className="bookshelf">
                <h2 className="bookshelf-title">Want To Read</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    { this.props.Books.map(Book =>
                        { if(Book.shelf === 'wantToRead')
        
                        return (<li>
                                    <div className="book">
                                        <div className="book-top"> 
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${Book.imageLinks.thumbnail})` }}></div>
                                        <Dropdown updateShelf = {this.props.updateShelf} Book = {Book} shelf = {[{ type : 'Currently Reading', id : 'currentlyReading'}, { type : 'Read', id : 'read'} ] }/>
                                        </div>
                                        <div className="book-title">{Book.title} </div>
                                        <div className="book-authors">{Book.authors}</div>
                                    </div>
                                    </li> )
                                })}
        
                                    </ol>
                </div>
                </div>
                                    </div>
            )
                }
                    }

            export default WantToRead
