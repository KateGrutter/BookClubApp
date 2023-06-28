import { ReactNode, useState } from "react";
import { Book } from "../models/Book";
import BookContext from "./BookContext";

interface Props { children: ReactNode;}

export default function BookContextProvider({children}: Props) {
    const [listBooks, setListBooks] = useState<Book[]>([]);
    const [currentBook, setCurrentBook] = useState<Book | undefined>();

    function addListBook(book: Book): void {
        setListBooks(listBooks => [...listBooks, book]);
    }
    function setCurrent(book: Book): void {
        setCurrentBook(book);
    }

    return(
        <BookContext.Provider value={{listBooks, addListBook, currentBook, setCurrent}}>
            {children}
        </BookContext.Provider>
    )
}