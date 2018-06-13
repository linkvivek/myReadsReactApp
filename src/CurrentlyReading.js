import React, { Component } from 'react';
import Dropdown from './Dropdown';




class CurrentlyReading extends Component {
render() {
    return (
        <div>
        <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
        <ol className="books-grid">
            { this.props.Books.map(Book =>
                { if(Book.shelf === 'currentlyReading')

                return (<li>
                            <div className="book">
                                <div className="book-top"> 
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${Book.imageLinks.thumbnail})` }}></div>
                                    <Dropdown updateShelf = {this.props.updateShelf} Book = {Book} shelf = {[{ type : 'Want To Read', id : 'wantToRead'}, { type : 'Read', id : 'read'}]} />
                                </div>
                                <div className="book-title">{Book.title}</div>
                                <div className="book-authors">{Book.author}</div>
                            </div>
                            </li> )})}

                            </ol>
        </div>
        </div>
                            </div>
    )
}}


                
            
    export default CurrentlyReading
