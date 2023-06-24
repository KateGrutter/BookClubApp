//this will have the books to map out when the user searches for a book

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bookDetails} from "../services/BookService";


export function BookDetails(props: {
  onClose: () => void;
  id: string | undefined;
}) {
  const [details, setDetails] = useState<any>();
 

  useEffect(() => {
    bookDetails(props.id!).then((data) => setDetails(data));
  }, [props.id]);
  // ! means it will not equal null
  return (
    <div>
      {details?.title}
      <button onClick={() => props.onClose()}>Cancel</button>
    </div>
  );
}
