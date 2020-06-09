import React, {useContext, useState, useEffect} from 'react'
import {BookContext} from '../contexts/BookContext'
import BookDetails from './BookDetail'

const BookList = () => {
    const {bookState} = useContext(BookContext)
    return(
        <div className="book_list">
            <ul>
                {
                    bookState.map(bookMap => {
                        return(
                            <BookDetails key={bookMap.id} bookProp={bookMap} /> 
                        )
                    })
                }
                
            </ul>
        </div>
    )
}
export default BookList


























// import React, {useContext} from 'react';
// import {BookContext} from '../contexts/BookContext';
// import BookDetails from './BookDetail';

// const BookList = () => {
//     const {bookState} = useContext(BookContext);
//     return (
//         <div className="book_list">
//             <ul>
//                  {
//                     bookState.map(bookMap=> {
//                         return (
//                             <BookDetails bookProp = {bookMap} key={bookMap.id} />
//                         )
//                     })
//                 }
//             </ul>
           
//         </div>
//     )
// }
// export default BookList


































