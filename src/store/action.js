import * as BooksAPI from '../BooksAPI'



    const fetchBooks = () => dispatch => {
        BooksAPI.getAll().then(Books => {
          dispatch({
              type: 'fetch_books',
              Books
            }
        )
      })    
      }
  


export default (fetchBooks)