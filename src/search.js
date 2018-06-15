import React from 'react'
import * as BooksAPI from './BooksAPI'
import Shelf from './shelf'

class Search extends React.Component {

    state = {
        searchData : []
      }    

      updateQuery = (value) => {
        if(value == '')
          this.state.searchData = []
        else {
        BooksAPI.search(value).then((result) => {
          if(result.hasOwnProperty('error')){
            this.setState({
              searchData: []
            })
          } else 
          this.markBookStatus(result)
        }
      )}}

      markBookStatus(books) {
        const localBooks = this.props.Books
        console.log('///////')
        console.log(books)
        books.forEach(((book, index) => {
          let foundBook = localBooks.find(b => b.id === book.id)
          book.shelf = foundBook ? foundBook.shelf : 'none'
          books[index] = book
        }))
    
        this.setState({searchData: books})
      }
          

      render() {
        console.log(this.state.searchData)
    
        return (

            <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" 
              onChange = {(e) => this.updateQuery(e.target.value)} ></input>

            {this.state.searchData.length>0 && (
              <Shelf Books = {this.state.searchData} updateShelf = {this.props.updateShelf} />
          )}
          </div>
        
        )
    }
    }


    export default Search