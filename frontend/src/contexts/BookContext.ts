
import { createContext } from "react";
import { Book } from "../models/Book";
import { User } from "../models/User";
import { Post } from "../models/Post";
// import { title } from "process";


interface BookContextModel {
    listBooks: Book[];
    currentBook: Book | undefined;
    listPosts: Post[];
    addListPost: (post: Post) => void;
    addListBook: (book: Book) => void,
    setCurrent: (book:Book) => void
}



const defaultValue: BookContextModel = {
    listBooks: [],
    currentBook: undefined,
    addListBook: () => {},
    setCurrent: () => {},
    listPosts: [],
    addListPost: () => {}
};





const BookContext = createContext(defaultValue);
export default BookContext;