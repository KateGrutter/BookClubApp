
import { createContext } from "react";
import { Book } from "../models/Book";


interface BookContextModel {
    books: Book[];
    addBook: (book: Book) => void
}

const defaultValue: BookContextModel = {
    books: [],
    addBook: () => {}
};

const BookContext = createContext(defaultValue);
export default BookContext;