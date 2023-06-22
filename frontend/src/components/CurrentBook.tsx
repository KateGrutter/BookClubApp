import { useEffect, useState } from "react";
import { getBook } from "../services/BookService";
import { Book } from "../models/Book";
import { useParams } from "react-router-dom";


export function CurrentBook() {

    const [book, setBook] = useState<Book>();

    const key = useParams().key

    useEffect(() => {
        getBook().then(data => setBook(data))
    }, []);


    return(
        <div>
            <h3>Current Read:</h3>
            <div>Insert cover here</div>
            <p>{book?.title}</p>
        </div>
    )
}