import { useState, useEffect } from "react"
import {  searchBooks} from '../services/BookService'
import { Link } from 'react-router-dom'

export function SearchResults(props: {query:string}) {

    const [results, setResults] = useState([]);

    useEffect(() => {
       searchBooks(props.query).then(data => setResults(data.docs))
    }, [props.query]);

    console.log(results)
    return(
        <div>
           <h2>Search Results</h2>
      {results.map((book) => 
        <Link to={'/books/{book.key}'}>{book}</Link>
      )}
        </div>
    )
}
