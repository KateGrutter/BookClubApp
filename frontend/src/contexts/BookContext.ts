
import { createContext } from "react";
import { Book } from "../models/Book";
// import { title } from "process";


interface BookContextModel {
    listBooks: Book[];
    currentBook: Book | undefined;
    addListBook: (book: Book) => void,
    setCurrent: (book:Book) => void
}

const defaultValue: BookContextModel = {
    listBooks: [],
    currentBook: undefined,
    addListBook: () => {},
    setCurrent: () => {}
};

const BookContext = createContext(defaultValue);
export default BookContext;