//this will have the books to map out when the user searches for a book

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bookDetails, getBook } from "../services/BookService";

import { Book } from "../models/Book";

export function BookDetails(props: {
  onClose: () => void;
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
    </div>
  );
}
