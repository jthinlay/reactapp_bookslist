import React, {useContext} from 'react'
import {BookContext} from '../contexts/BookContext'
import firebase from '../config/fbConfig'

const BookDetails = ({bookProp}) => {
    const {actionDispatch} = useContext(BookContext)

    const handleOnClick = () => {

       // let bookTitle = "My Book";
        var ref = firebase.firestore().ref('books/docs.id[0]');
        ref.on('id', function(snapshot){
            var deletedId = snapshot.val();
            console.log(deletedId);
        })
        

        // firebase.firestore().collection("books").where("title", "==", bookTitle).get()
        // .then(querySnapshot => {
        //     querySnapshot.docs[0].ref.delete();
        // });

        //let docRef = firebase.firestore().collection('books').documentReference.get()
        // firebase.firestore().collection('books').doc(docRef).delete()
        // .then(()=>{console.log("succefully deleted!")})
        // .catch((error)=>{ console.log("Error removing document:", error)})
        
        //console.log(docRef)
        
        actionDispatch({type: "REMOVE_BOOK", id: bookProp.id})
        
    }
    
    return(
        <div>
            {
                <li onClick={handleOnClick} >
                    <div className="title">{bookProp.title}</div>
                    <div className="author">{bookProp.author}</div>
                </li>
            }
        </div>
    )
    }

export default BookDetails











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