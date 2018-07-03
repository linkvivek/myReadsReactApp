
import * as BooksAPI from '../BooksAPI'
import store from './index'
import {getUpdated} from './actionCreator'



export const updateBook = (book, shelf) => dispatch => {
    BooksAPI.update(book, shelf).then(() => { 
        getUpdated(dispatch)
    })
}




