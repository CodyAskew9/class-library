import React, {useContext} from 'react';
import { BookContext } from '../context/BookContext';


const Navbar = () => {
    const {books} = useContext(BookContext);
    return (
        <div className="navbar">
            <h1>Ms.Leihzel's Library</h1>
            <p>Currently there are {books.length} checked out!</p>
        </div>
     );
}
export default Navbar;