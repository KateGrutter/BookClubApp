import express from "express";
import { Book } from "../models/Book";
import { getClient } from "../db";

export const pastBookRouter = express.Router();

pastBookRouter.get('/booksread', async (req, res) => {
    try {
        const client = await getClient();
        const books = await client.db().collection<Book>('booksread').find().toArray();
        res.json(books);
    } catch (err) {
        console.error("ERROR", err);
        res.status(500).json({ message: "internal Server Error" });
    }
});


pastBookRouter.post('/booksread', async (req, res) => {
    const book = req.body as Book;
    const client = await getClient();
    await client.db()
        .collection<Book>('booksread')
        .insertOne(book);
    res.status(201).json(book)
});

export default pastBookRouter;