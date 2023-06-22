import axios from "axios";
import { Book } from "../models/Book";


//localhost =>   http://127.0.0.1:5001/bookclubapp-41e2d/us-central1/api
//global => https://us-central1-bookclubapp-41e2d.cloudfunctions.net/api

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
        title: doc.title
      }))
    );
}

export function bookDetails(key: string): Promise<Book> {
  return axios
    .get(`https://openlibrary.org${key}.json`)
    .then(response => response.data)
}

