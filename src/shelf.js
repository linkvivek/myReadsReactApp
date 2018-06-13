import React, { Component } from 'react';
import Dropdown from './Dropdown';


class Shelf extends Component {
render() {
    return (
        <div>
        <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.header}</h2>
        <div className="bookshelf-books">
        <ol className="books-grid">
            { this.props.Books.map(Book =>
                // { if(Book.shelf === 'currentlyReading')
                { if(this.props.header === 'Currently Reading')

                {return (<li>
                            <div className="book">
                                <div className="book-top"> 
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${Book.imageLinks.thumbnail})` }}></div>
                                    <Dropdown updateShelf = {this.props.updateShelf} Book = {Book} shelf = {[{ type : 'Want To Read', id : 'wantToRead'}, { type : 'Read', id : 'read'}]} />
                                </div>
                                <div className="book-title">{Book.title}</div>
                                <div className="book-authors">{Book.authors}</div>
                            </div>
                            </li> )}

                 else if(this.props.header === 'Want To Read') {
                    return (<li>
                        <div className="book">
                            <div className="book-top"> 
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${Book.imageLinks.thumbnail})` }}></div>
                            <Dropdown shelf = { [ { type : 'Currently Reading', id : 'cr'}, { type : 'Read', id : 'r'} ] }/>
                            </div>
                            <div className="book-title">{Book.title} </div>
                            <div className="book-authors">{Book.authors}</div>
                        </div>
                        </li> )
        
                }
                else if(this.props.header === 'Read') {
                    return (<li>
                        <div className="book">
                            <div className="book-top"> 
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${Book.imageLinks.thumbnail})` }}></div>
                            <Dropdown shelf = { [ { type : 'Currently Reading', id : 'cr'}, { type : 'Want To Read', id : 'r'} ] }/>
                            </div>
                            <div className="book-title">{Book.title} </div>
                            <div className="book-authors">{Book.authors}</div>
                        </div>
                        </li> )
        
                }
                            
                        })}

        </ol>
        </div>
        </div>
                            </div>
    )
}}


                
            
    export default Shelf
