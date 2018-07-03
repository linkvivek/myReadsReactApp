import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI';
import {updateBook} from './store/updateBooks'
import {connect} from 'react-redux'


class Dropdown extends Component {

    updateShelf = (book, value) => {
        this.props.updateBook(book, value)
      }


    render() { 
    return (
        <div className="book-shelf-changer">
            <select onChange = {(e) => this.updateShelf(this.props.Book, e.target.value)} value={this.props.Book.shelf}>
                <option disabled>Move to...</option>
                { this.props.shelf.map((s) => (
                <option value = {s.id} key = { s.id } >{ s.type }</option>
                ))}
            </select>
        </div>

    )
}

}


export default connect(null, {updateBook})(Dropdown)
