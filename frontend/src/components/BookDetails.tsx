//this will have the books to map out when the user searches for a book

import { useEffect, useState } from "react";
<<<<<<< HEAD
import { bookDetails } from "../services/BookService";
=======
import { useParams } from "react-router-dom";
import { bookDetails, getBook } from "../services/BookService";
>>>>>>> 427befcbb46c9669d2eaad6e6232d198fd1c5e8a

import { Book } from "../models/Book";

export function BookDetails(props: {
  onClose: () => void;
<<<<<<< HEAD
  onReading: () => void;
  onRead: () => void;
  id: string | undefined;
}) {
  const [details, setDetails] = useState<any>();

  useEffect(() => {
    if (props.id !== undefined) {
      bookDetails(props.id).then((data) => setDetails(data));
    }
    
  }, [props.id]);
  // ! means it will not equal null
  return (
    <div>
        <h1>{details?.title}</h1>  
        
        <p>{details?.description}</p>
        
      
      
      
        
    
      
      <button onClick={() => props.onClose()}>Cancel</button>
      <button onClick={() => props.onReading()}>Mark as reading</button>
      <button onClick={() => props.onRead()}>Mark as already read</button>
=======
  id: string | undefined;
}) {
  const [details, setDetails] = useState<any>();
  const bookKey = useParams().key;

  useEffect(() => {
    bookDetails(bookKey!).then((data) => setDetails(data));
  }, [bookKey]);
  // ! means it will not equal null
  return (
    <div>
      {details?.title}
      <button onClick={() => props.onClose()}>Cancel</button>
>>>>>>> 427befcbb46c9669d2eaad6e6232d198fd1c5e8a
    </div>
  );
}
