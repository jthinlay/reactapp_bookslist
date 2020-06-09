import {v4 as uuidv4} from 'uuid'
import firebase from '../config/fbConfig'

export const bookReducer = (state, action) => {
    switch(action.type){
        case "ADD_BOOK":
            return[
                ...state,
                {
                    title: action.booker.title,
                    author: action.booker.author,
                    id: uuidv4()
                }
            ]
        case "REMOVE_BOOK":
            return (
                state.filter(removingBook => removingBook.id !== action.id)
            )
        default: 
            return state
    }
}
























// import {v4 as uuidv4} from 'uuid';

// export const bookReducer = (state, action) => {
//     switch(action.type){
//         case 'ADD_BOOK':
//             return [
//                 ...state,
//                 {   title:  action.booker.title,
//                     author: action.booker.author,
//                     id: uuidv4()
//                 }
//             ]
//         case 'REMOVE_BOOK':
//             return state.filter(book => book.id !== action.id)
        
//         default: 
//             return state
//     }
// }

