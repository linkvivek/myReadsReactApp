import React, { Component } from 'react';
import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead'
import Read from './Read'
import Shelf from './shelf'

class ListBooks extends Component {

    render() {
        return(
            <div className="list-books-content">
                <CurrentlyReading Books = { this.props.Books } updateShelf = {this.props.updateShelf} header = {'Currently Reading'} />
                <WantToRead Books = { this.props.Books } updateShelf = {this.props.updateShelf}  header = {'Want To Read'}/>
                <Read Books = { this.props.Books } updateShelf = {this.props.updateShelf} header = {'Read'} />        
                {/* <Shelf Books = { this.props.Books } updateShelf = {this.props.updateShelf} header = { 'Currently Reading'}/>         */}
                {/* <Shelf Books = { this.props.Books } updateShelf = {this.props.updateShelf} header = { 'Want To Read'}/>         */}
                {/* <Shelf Books = { this.props.Books } updateShelf = {this.props.updateShelf} header = { 'Read'}/>         */}

              </div>
            
        )
    }
}

export default ListBooks
