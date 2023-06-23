import { ReactNode, useState } from "react";
import { Book } from "../models/Book";
import BookContext from "./BookContext";

interface Props { children: ReactNode;}

export default function BookContextProvider({children}: Props) {
    const [books, setBooks] = useState<Book[]>([]);

    function addBook(book: Book): void {
        setBooks(prev => [...prev, book]);
    }

    return(
        <BookContext.Provider value={{books, addBook}}>
            {children}
        </BookContext.Provider>
    )
}