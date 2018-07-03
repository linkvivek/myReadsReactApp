// import redux from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {loadState, saveState} from './localStorage'
import { combineReducers } from 'redux'


const fetch = (state = [], action) => {

    switch(action.type) {
        case 'fetch_books':

            return  action.Books            
                
        default:
            return state
    }
}

const search = (state = [], action) => {

    switch(action.type) {
        case 'search_books':
            return action.result

    default:
    return state
    }
}


const store = createStore(combineReducers({
    fetch,
     search}),
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
     applyMiddleware(thunk))

export default store
