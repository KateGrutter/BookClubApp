import { ReactNode, useState } from "react";
import { Book } from "../models/Book";
import BookContext from "./BookContext";

interface Props { children: ReactNode;}

export default function BookContextProvider({children}: Props) {
    const [pastBooks, setPastBooks] = useState<Book[]>([]);
    // const [currentBook, setCurrentBook] = useState<Book>();

    function addPastBook(book: Book): void {
        setPastBooks(prev => [...prev, book]);
    }
    // function setCurrent(book: Book): void {
    //     setCurrentBook(book);
    // }

    return(
        <BookContext.Provider value={{pastBooks, addPastBook}}>
            {children}
        </BookContext.Provider>
    )
}