import React, {useState} from 'react'
import firebase from '../config/fbConfig'

const BookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const db = firebase.firestore()

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('books').add({
            title: {title},
            author: {author},
        }).then((docRef)=>{
            console.log("document written with ID:", docRef.id);     
        }).catch((error)=>{
            console.error("Error adding document: ", error)
        })

        setTitle('');
        setAuthor('');
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Book title" value={title} onChange={(e)=> setTitle(e.target.value)} required />
            <input type="text" placeholder="Author name" value={author} onChange={(e)=> setAuthor(e.target.value)} required />
            <input type="submit" value="Add Book" />
        </form>
    )
}
export default BookForm
















// import React, {useContext, useState} from 'react';
// import {BookContext} from '../contexts/BookContext';

// const BookForm = () => {
//     const { actionDispatch } = useContext(BookContext)
//     const [title, setTitle] = useState('');
//     const [author, setAuthor] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//          actionDispatch({type: 'ADD_BOOK', booker: {title, author}})
//         setTitle('');
//         setAuthor('');
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" placeholder="book title" value={title} onChange = {(e)=> setTitle(e.target.value)} required />
//             <input type="text" placeholder="author"  value={author} onChange= {(e) => setAuthor(e.target.value)} required />
//             <input type="submit" value="Add Book" />
//         </form>
//     )
// }
// export default BookForm