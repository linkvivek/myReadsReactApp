import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI';

class Dropdown extends Component {

    render() {
    return (
        <div className="book-shelf-changer">
            <select onChange = {(e) => this.props.updateShelf(this.props.Book, e.target.value)}>
                <option value="move" disabled selected>Move to...</option>
                { this.props.shelf.map((s) => (
                <option value= {s.id} >{ s.type }</option>
                ))}
            </select>
        </div>

    )

}
    // updateShelf(book, shelf) {
    // alert(book)
    // BooksAPI.update(book, shelf).then(() => this.fetchBooks())
//   }


}



export default Dropdown