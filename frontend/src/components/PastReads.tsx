import { useContext, useEffect} from "react";
import { Header } from "./Header/Header";
import BookContext from "../contexts/BookContext";
import { getBooksRead } from "../services/BookService";

export function PastReads() {

  const {listBooks, addListBook} = useContext(BookContext);

  useEffect(() => {
    getBooksRead().then((data) => addListBook(data));
  }, []);

  return (
    <div>
      <Header />
      <p>List of past reads.</p>

      {listBooks.map(book => <p>{book.title}</p>)}
    </div>
  );
}
