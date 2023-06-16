import express from "express";

import cors from "cors";
import userRouter from "./Routes/userRouter";
import postRouter from "./Routes/postRouter";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/", userRouter);
app.use("/", postRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
