import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";


const BookDetails = ({book}) =>{
    const { dispatch } = useContext(BookContext);
     return(
         <li onClick={() => dispatch({type: 'REMOVE_BOOK', id: book.id})}>
             <div className="title">{book.title}</div>
             <div className="checkedOutBy">{book.checkedOutBy}</div>
         </li>
      );
 }
 export default BookDetails;