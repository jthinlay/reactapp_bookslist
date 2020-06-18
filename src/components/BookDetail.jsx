// import React, {useContext, useState, useEffect} from 'react'
// import {BookContext} from '../contexts/BookContext'
// import firebase from '../config/fbConfig'


// const BookDetails = ({bookProp}) => {
//     const {actionDispatch} = useContext(BookContext)
//     // const [title, setTitle] = useState('')
//     // const [author, setAuthor] = useState('')

//     // useEffect(async()=>{
//     //     const snapshot = await firebase.firestore().collection('books').get();
//     //     snapshot.forEach(doc => {
//     //       setTitle(doc.data().title)
//     //       setAuthor(doc.data().author)
//     //     })
//     // }, [])

//     // const handleOnClick = () => {
//     //     const db = firebase.firestore()
//     //     db.collection('books').get().then(snapshot => {
//     //         snapshot.docs.forEach(doc => {
//     //             const id = doc.id 
//     //             db.collection('books').doc(id).delete() 
//     //             console.log("ID:", id)
//     //         }) 
//     //     })    
//     //     actionDispatch({type: "REMOVE_BOOK", id: bookProp.id})
//     // }
    
//     return(
//         <div>
//             {
//                 <li>
//                     <div className="title">{bookProp.title}</div>
//                     <div className="author">{bookProp.author}</div>
//                 </li>
//             }
//         </div>
//     )
// }
// export default BookDetails





// import React, {useContext} from 'react';
// import {BookContext} from '../contexts/BookContext';

// const BookDetails = ({bookProp}) => {
//     const {actionDispatch} = useContext(BookContext);
//     return(
//         <div>
//             {
//                 <li onClick={()=> actionDispatch({type: 'REMOVE_BOOK', id: bookProp.id})}>
//                     <div className="title">{bookProp.title}</div>
//                     <div className="author">{bookProp.author}</div>
//                 </li>
//             }
//         </div>
//     )
// }
// export default BookDetails