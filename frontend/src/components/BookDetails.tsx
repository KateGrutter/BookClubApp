//this will have the books to map out when the user searches for a book

import { useEffect, useState } from "react"
import { bookDetails } from "../services/BookService";

// import { Book } from "../models/Book";

export function BookDetails(props: { onClose: () => void, id: string|undefined}) {
    
    const [details, setDetails] = useState<any>()

   

    useEffect(() => {
        if (props.id !== undefined) {
        bookDetails(props.id).then(data => setDetails(data))
    }
    }, [props.id]);
// ! means it will not equal null
    return(
        <div>
            {details?.title}
            <button onClick={() => props.onClose()}>Cancel</button>
            </div>
        
    )
}