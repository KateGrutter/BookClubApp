import express from "express";
import * as functions from 'firebase-functions'
import cors from "cors";
import userRouter from "./Routes/userRouter";
import postRouter from "./Routes/postRouter";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/", userRouter);
app.use("/", postRouter);



export const api = functions.https.onRequest(app)