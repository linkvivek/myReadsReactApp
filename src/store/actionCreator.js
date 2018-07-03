
import * as BooksAPI from '../BooksAPI'
import store from './index'



export const  markBookStatus = (query) => dispatch => {
  BooksAPI.search(query).then((result) => {
    if(result && result.length>0){
    dispatch({
      type: 'search_books',
      result
    })
  } else {
    dispatch({
      type: 'search_books',
      result: null
    })
    
  }
})

  }


  export const getUpdated = (dispatch) => {
    BooksAPI.getAll().then((Books) => {
        dispatch({
            type: 'fetch_books',
            Books
          })
    }) 

}
