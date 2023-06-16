//this will have the books to map out when the user searches for a book

import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getBook } from "../services/BookService";
import { title } from "process";

export function BookDetails() {

    const key = useParams().key

    useEffect(() => {
        getBook().then(book => book.key ===key)
    }, [key]);
    return(
        <div>{title}</div>
        
    )
}