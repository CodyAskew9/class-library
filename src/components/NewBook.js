import React, {useContext, useState} from "react";
import { BookContext } from "../context/BookContext";

const NewBookForm = () => {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [checkedOutBy, setCheckOutBy] = useState('');
    const handleSubmit = (e) => {e.preventDefault();
      dispatch({type: 'ADD_BOOK', book: {title, checkedOutBy}});
      setTitle('');
      setCheckOutBy('');
  }
    return(
        <form onSubmit= {handleSubmit}>
            <input type="text" placeholder="book title" value={title}
            onChange={(e) => setTitle(e.target.value)} required/>
            <input type="text" placeholder="checked out by" value={checkedOutBy}
            onChange={(e) => setCheckOutBy(e.target.value)} required/>
            <input type="submit" value="Checkout" />
        </form>
    );
  }
  
  export default NewBookForm;