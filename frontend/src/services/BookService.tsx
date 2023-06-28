import axios from "axios";
import { Book } from "../models/Book";


//localhost =>   http://127.0.0.1:5001/bookclubapp-41e2d/us-central1/api
//global => https://us-central1-bookclubapp-41e2d.cloudfunctions.net/api

export function getCurrentBook(id: string) {
  return axios
    .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
    .then((response) => response.data);
}

export function getBooksRead() {
  return axios
  .get('http://127.0.0.1:5001/bookclubapp-41e2d/us-central1/api/booksread')
  .then(response => response.data)
}

export function searchBooks(query: string): Promise<Book[]> {
  return axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    .then((response) =>
      response.data.items.map((items: any) => ({
        id: items.id,
        title: items.volumeInfo.title,
        details: items.volumeInfo.description,
      }))
    );
}

export function bookDetails(id: string): Promise<any> {
  return axios
    .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
    .then((response) => response.data);
  
}