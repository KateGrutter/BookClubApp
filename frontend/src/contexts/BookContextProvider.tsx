import { ReactNode, useState } from "react";
import { Book } from "../models/Book";
import BookContext from "./BookContext";
import { Post } from "../models/Post";
import { User } from "../models/User";

interface Props { children: ReactNode;}

export default function BookContextProvider({children}: Props) {
    const [listBooks, setListBooks] = useState<Book[]>([]);
    const [currentBook, setCurrentBook] = useState<Book | undefined>();
    const [listPosts, setListPosts] = useState<Post[]>([]);
    const [currentUser, setCurrentUser] = useState<User | undefined>();



    function addListBook(book: Book): void {
        console.log(book)
        setListBooks(listBooks => [...listBooks, book]);
    }
    function setCurrent(book: Book): void {
        setCurrentBook(book);
    }

    function addListPost(post: Post): void {
        setListPosts(listPosts => [...listPosts, post])
    }

    function addCurrentUser(user: User): void {
        setCurrentUser(user)
    }

    function loadPosts(posts: Post[]): void {
        setListPosts(posts)
    }

    function loadBooks(books: Book[]): void {
        setListBooks(listBooks => [...listBooks, ...books])
    }
    return(
        <BookContext.Provider value={{loadBooks, loadPosts, listBooks, addListBook, currentBook, setCurrent, listPosts, addListPost}}>
            {children}
        </BookContext.Provider>
    )
}