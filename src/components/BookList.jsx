import React, {useState, useEffect} from 'react'
import firebase from '../config/fbConfig'

const db  = firebase.firestore()

const handleDeleteOnClick = (documentId) => {
    db.collection('books').doc(documentId).delete()
    .then(()=>{console.log("Successfully delete the file")})
    .catch((error)=>{console.log(error)})
}
const useBooks = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        db.collection('books').onSnapshot((snapshot) => {
            const newBooks = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            setBooks(newBooks)
        })
    }, [])
    return books
}
const BookList = () => {
    const books = useBooks()
    return (
        <div className="book_list">
            <ul>
                {
                    books.map(book => <li key={book.id} onClick={()=>{handleDeleteOnClick(book.id)}}>
                        <div className="cross">x</div>
                        <div className="title">{book.title.title}</div>
                        <div className="author">{book.author.author}</div>
                    </li>)
                }
            </ul>  
        </div>
    )
}
export default BookList





















// import React, {useState, useEffect} from 'react'
// import firebase from '../config/fbConfig'

// const useBooks = () => {
//     const [books, setBooks] = useState([])
//      useEffect(() => {
//         firebase.firestore().collection('books').onSnapshot((snapshot) => {
//             const newBooks =  snapshot.docs.map(doc => ({
//                  id: doc.id,
//                 ...doc.data()
//               }))
//             setBooks(newBooks)
//         })
//     },[])
//     return books
// }

// const handleOnClick = (documentId) => { 
//     const db = firebase.firestore();
//     db.collection("books").doc(documentId).delete().then(() => {
//     console.log("item with id " + documentId + " got deleted");
//     }).catch((e) => console.log(e));   
// }

// const BookList = () => {
//     const books = useBooks()
//     return(
//         <div className="book_list">
//             <ul>
//                 {
//                     books.map(book => 
//                          <li key={book.id} onClick={()=> handleOnClick(book.id)} >
//                             <div className="cross" > X </div>
//                             <div className="title">Title: <strong>{ book.title.title}</strong></div>
//                             <div className="author">Author: <i> { book.author.author} </i></div>
//                          </li>      
//                     )
//                 } 
//             </ul>
//         </div>
//     )
// }
// export default BookList









 
/////////////////////////////////////

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


































