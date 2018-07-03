import React from 'react'
// import * as BooksAPI from './BooksAPI'
import Shelf from './shelf'
import {connect} from 'react-redux'
import {markBookStatus} from './store/actionCreator'
// import store from './store'
// import {loadState} from './store/localStorage'
// import {Link} from 'react-router-dom'; //setup back button


class Search extends React.Component {

      updateQuery = (query) => {
        this.props.markBookStatus(query.trim())
      }
          
      render() {
        return (
            <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" 
              onChange = {(e) => this.updateQuery(e.target.value)} ></input>
              <Shelf updateShelf = {this.props.updateShelf} fromSearch = {true}/>
          </div>
        )
    }
    }
  
    export default connect(null, {markBookStatus})(Search)

