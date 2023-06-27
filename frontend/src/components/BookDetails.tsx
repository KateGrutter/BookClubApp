//this will have the books to map out when the user searches for a book

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bookDetails} from "../services/BookService";
import { Link } from "react-router-dom";



export function BookDetails() {
  const [details, setDetails] = useState<any>();

  const id = useParams().id;

 

  useEffect(() => {
    bookDetails(id!).then((data) => setDetails(data.volumeInfo));
  }, [id]);
  // ! means it will not equal null
  return (
    <div>
      <img src={details?.imageLinks.thumbnail} alt=""/>
      <h3>{details?.title} by {details?.authors}</h3>
      <p>{details?.description}</p>
      <Link to={'/home'}>Go Home</Link>
      
    </div>
  );
}
