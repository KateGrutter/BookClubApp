import express from "express";
import { getClient } from "../db";
// import { ObjectId } from "mongodb";
import { Book } from "../models/Book";
const pastBookRouter = express.Router();

// const meetings: Meeting[] = [];

const errorResponse = (error: any, res: any) => {
    console.error("FAIL", error);
    res.status(500).json({
        message: "Internal server error",
    })
};

pastBookRouter.get("/booksread", async (req, res) => {
    try {
        const client = await getClient();
        const meetings = await client.db().collection<Book>("booksread").find().toArray();
        res.status(200).json(meetings);
    } catch (err) {
        errorResponse(err, res);
    }
});


export default pastBookRouter;