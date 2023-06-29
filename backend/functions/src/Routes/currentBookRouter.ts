import express from "express";
import { getClient } from "../db";
import { ObjectId } from "mongodb";
import { Book } from "../models/Book";

const currentBookRouter = express.Router();
const currentBook: Book[] = [];
const errorResponse = (error: any, res: any) => {
    console.error("FAIL", error);
    res.status(500).json({
        message: "Internal server error",
    });
};

currentBookRouter.get("/currentbook", async (req, res) => {
    try {
        const client = await getClient();
        const currentBook = await client.db().collection<Book>("users").find().toArray();
        res.status(200).json(currentBook);
    } catch (err) {
        errorResponse(err, res);
    }
});
currentBookRouter.post("/currentbook", async (req, res) => {
    try {
        const newCurrentBook: Book = req.body;
        newCurrentBook.id = new ObjectId();
        currentBook.push(newCurrentBook);
        res.status(201).json(newCurrentBook);
    } catch (err) {
        errorResponse(err, res);
    }
});