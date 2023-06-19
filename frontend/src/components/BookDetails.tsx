//this will have the books to map out when the user searches for a book

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { bookDetails, getBook } from "../services/BookService";
import { title } from "process";
import { Book } from "../models/Book";

export function BookDetails(prop: { onClose: () => void}) {
    const [details, setDetails] = useState("")
    
    
    
    return(
        <div>
            
           <p>instert book details here</p>
            
            <button onClick={() => prop.onClose()}>Cancel</button>
            </div>
        
    )
}