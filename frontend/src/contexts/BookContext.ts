
import { createContext } from "react";
import { Book } from "../models/Book";
// import { title } from "process";


interface BookContextModel {
    pastBooks: Book[];
    // currentBook: Book;
    addPastBook: (book: Book) => void,
    // setCurrent: (book:Book) => void
}

const defaultValue: BookContextModel = {
    pastBooks: [],
    // currentBook: {
    //     title: title,
    // },
    addPastBook: () => {},
    // setCurrent: () => {}
};

const BookContext = createContext(defaultValue);
export default BookContext;