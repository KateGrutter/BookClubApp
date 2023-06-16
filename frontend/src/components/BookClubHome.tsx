import { CurrentBook } from "./CurrentBook";
// import { DiscussionBoard } from "./DiscussionBoard/DiscussionBoard";
import {useState} from 'react'
import { SearchBar } from "./SearchBar";
import { SearchResults } from "./SearchResults";
import { DiscussionBoard } from "./DiscussionBoard/DiscussionBoard";
import { Book } from "../models/Book";

export function BookClubHome() {
    const [books, setBooks] = useState<Book[]>([]);

// function handleSearch(term: string): any {
// setBooks(books)
// }

    return(
        <div>
            <CurrentBook />
            <DiscussionBoard></DiscussionBoard>
            <SearchBar onSearch = {setBooks(books)}></SearchBar>
            <SearchResults Books={books}></SearchResults>
            
        </div>
    )
}