import axios from "axios";

export function getBook() {
    return axios
    .get(`https://openlibrary.org/works/OL5815517W.json`)
    .then(response => response.data)
}

export function searchBooks(query:string) {
    return axios
    .get(`https://openlibrary.org/dev/docs/api/search/.json?q=${query}`)
    .then(response => response.data)
}

//or

export function searchBookss(query:string) {
return axios
.get("https://openlibrary.org/dev/docs/api/search", {
    params: {
        q: query
    }
})
.then(response => response.data);
}
