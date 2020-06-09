import React, {useContext} from 'react'
import {BookContext} from '../contexts/BookContext'
import BookForm from './BookForm'

const Navbar = () => {
    const {bookState} = useContext(BookContext)
    return(
        <div className="navbar">
            <h1>JT Reading Materials List</h1>
            <p>Currently has {bookState.length} reading material left</p>
            <BookForm />
        </div>
    )
}
export default Navbar




















// import React, {useContext} from 'react';
// import {BookContext} from '../contexts/BookContext';
// import BookForm from './BookForm';

// const Navbar = () => {
//     const {bookState} = useContext(BookContext)
//     return (
//         <div className="navbar">
//             <h1>JT Reading List </h1>
//             <p>Currently have {bookState.length} reading material</p>
//             <BookForm />
//         </div>
//     )
// }
// export default Navbar





























// import React, {useContext} from 'react';
// import {BookContext} from '../contexts/BookContext';
// import BookForm from './BookForm';


// const Navbar = () => {
//     const { bookState } = useContext(BookContext);
//     return (
//         <div className="navbar">
//             <h1>JT Reading List</h1>
//             <p>Currently you have {bookState.length} get through so far</p>
//             <BookForm />
//         </div>
//     )
// }
// export default Navbar
