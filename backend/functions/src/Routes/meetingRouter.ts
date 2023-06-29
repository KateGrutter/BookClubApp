import express from "express";
import { getClient } from "../db";
// import { ObjectId } from "mongodb";
import { Meeting } from "../models/Meeting";

const meetingRouter = express.Router();

// const meetings: Meeting[] = [];

const errorResponse = (error: any, res: any) => {
    console.error("FAIL", error);
    res.status(500).json({
        message: "Internal server error",
    })
};

meetingRouter.get("/pastmeetings", async (req, res) => {
    try {
        const client = await getClient();
        const meetings = await client.db().collection<Meeting>("pastmeetings").find().toArray();
        res.status(200).json(meetings);
    } catch (err) {
        errorResponse(err, res);
    }
});

// meetingRouter.post("/pastmeetings", async (req, res) => {
//     try {
//         const newMeeting: Meeting = req.body;
//         newMeeting._id = new ObjectId();
//         meetings.push(newMeeting);
//         res.status(201).json(newMeeting);
//     } catch (err) {
//         errorResponse(err, res);
//     }
// });

meetingRouter.post('/pastmeetings', async (req, res) => {
    const pastMeeting = req.body as Meeting;
    const client = await getClient();
    await client.db()
        .collection<Meeting>('pastmeetings')
        .insertOne(pastMeeting);
    res.status(201).json(pastMeeting)
});

export default meetingRouter;