import axios from "axios";
import { Book } from "../models/Book";

export function getBook() {
  return axios
    .get(`https://openlibrary.org/works/OL5815517W.json`)
    .then((response) => response.data);
}

export function searchBooks(query: string): Promise<Book[]> {
  return axios
    .get(`http://openlibrary.org/search.json?q=${query}`)
    .then((response) =>
      response.data.docs.map((doc: any) => ({
        key: doc.key,
        title: doc.title,
        details: doc.details,
      }))
    );
}

export function bookDetails(key: string): Promise<any> {
  return axios
    .get(`https://openlibrary.org/works/${key}.json`)
    .then(response => response.data)
}