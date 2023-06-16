import axios from "axios";

export function getBook() {
  return axios
    .get(`https://openlibrary.org/works/OL5815517W.json`)
    .then((response) => response.data);
}
export function searchBooks(query: string) {
  console.log("hello");
  return axios
    .get(`http://openlibrary.org/search.json?q=${query}`)
    .then((response) => response.data.docs);
}
