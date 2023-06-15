import { CurrentBook } from "./CurrentBook";
// import { DiscussionBoard } from "./DiscussionBoard/DiscussionBoard";
import {useState} from 'react'
import { SearchBar } from "./SearchBar";
import { SearchResults } from "./SearchResults";

export function BookClubHome() {
    const [searchTerm, setSearchTerm] = useState('');

function handleSearch(term: string): any {
setSearchTerm(term)
}

    return(
        <div>
            <CurrentBook />
            {/* <DiscussionBoard></DiscussionBoard> */}
            <SearchBar onSearch = {handleSearch}></SearchBar>
            <SearchResults query={searchTerm}></SearchResults>
            
        </div>
    )
}