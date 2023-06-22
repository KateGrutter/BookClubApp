//this will have the books to map out when the user searches for a book

import { useEffect, useState } from "react";
import { bookDetails } from "../services/BookService";

// import { Book } from "../models/Book";

export function BookDetails(props: {
  onClose: () => void;
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
    </div>
  );
}
