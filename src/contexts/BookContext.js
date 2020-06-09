import React, {createContext, useReducer, useEffect} from 'react'
import {bookReducer} from '../reducers/bookReducer'

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [bookState, actionDispatch] = useReducer(bookReducer, [],
        () => {
            const localData = localStorage.getItem('localBook');
            return localData ? JSON.parse(localData) : [
                {title: "first book", author: "first author", id: 2}
            ]
        });
    useEffect(()=>{
        localStorage.setItem('localBook', JSON.stringify(bookState))
    }, [bookState])
    return(
        <BookContext.Provider value={{bookState, actionDispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}
export default BookContextProvider


// import React, {createContext, useReducer, useEffect} from 'react';
// import {bookReducer} from '../reducers/bookReducer'

// export const BookContext = createContext();

// const BookContextProvider = (props) => {
//     const [bookState, actionDispatch] = useReducer(bookReducer, [], () => {
//         const localData = localStorage.getItem('books');
//         return localData ? JSON.parse(localData) : [
//             {title: 'my first book ',
//              author: 'by me',
//             id: 1
//           }
//         ]
//     });
//     useEffect(()=>{
//         localStorage.setItem('books', JSON.stringify(bookState));
//     }, [bookState])
//     return (
//             <BookContext.Provider value={{bookState, actionDispatch}}>
//                 {props.children}
//             </BookContext.Provider>
//     )
// }
// export default BookContextProvider

























// import React, {createContext, useReducer} from 'react';
// import {bookReducer} from '../reducers/bookReducer';

// export const BookContext = createContext();

// const BookContextProvider = (props) => {

//     const [bookState, actionDispatch] = useReducer(bookReducer, [
//                 {title: 'first book',
//                 author: 'first author',
//                 id: 1
//                 }
//     ]);
    
//     return (
//         <BookContext.Provider value={{bookState, actionDispatch} }>
//             {props.children}
//         </BookContext.Provider>
//     )
// }
// export default BookContextProvider