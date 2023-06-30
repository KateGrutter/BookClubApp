import { ReactNode, useState } from "react";
import { Book } from "../models/Book";
import BookContext from "./BookContext";
import { Post } from "../models/Post";

interface Props { children: ReactNode;}

export default function BookContextProvider({children}: Props) {
    const [listBooks, setListBooks] = useState<Book[]>([]);
    const [currentBook, setCurrentBook] = useState<Book | undefined>();
    const [listPosts, setListPosts] = useState<Post[]>([])


    function addListBook(book: Book): void {
        setListBooks(listBooks => [...listBooks, book]);
    }
    function setCurrent(book: Book): void {
        setCurrentBook(book);
    }

    function addListPost(post: Post): void {
        setListPosts(listPosts => [...listPosts, post])
    }

    return(
        <BookContext.Provider value={{listBooks, addListBook, currentBook, setCurrent, listPosts, addListPost}}>
            {children}
        </BookContext.Provider>
    )
}