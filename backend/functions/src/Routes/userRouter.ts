import express from "express";
import { getClient } from "../db";
import { ObjectId } from "mongodb";
import { User } from "../models/User";

const userRouter = express.Router();

const users: User[] = [];

const errorResponse = (error: any, res: any) => {
  console.error("FAIL", error);
  res.status(500).json({
    message: "Internal server error",
  });
};

userRouter.get("/users", async (req, res) => {
  try {
    const client = await getClient();
    const users = await client.db().collection<User>('Users').find().toArray();
    res.status(200).json(users);
  } catch (err) {
    errorResponse(err, res);
  }
});

userRouter.get("/users/:id", async (req, res) => {
  try {
    const _id: ObjectId = new ObjectId(req.params.id);
    const client = await getClient();
    const result = await client.db().collection<User>('users').find({ _id: _id }).toArray();
    if (result) {
      res.status(200);
      res.json(result);
    } else {
      res.status(404).send(`User not found`);
    }
  } catch (err) {
    errorResponse(err, res);
  }
});

userRouter.post("/users", async (req, res) => {
  try {
    const newUser: User = req.body;
    newUser._id = new ObjectId();
    users.push(newUser);
    res.status(201).json(newUser);
  } catch (err) {
    errorResponse(err, res);
  }
});

userRouter.put("/users/:id", async (req, res) => {
  try {
    const _id: ObjectId = new ObjectId(req.params.id);
    const user: User = req.body;
    const index: number = users.findIndex((item) => item._id?.equals(_id));
    if (index !== -1) {
      users[index] = user;
      res.status(200);
      res.json(user);
    } else {
      res.status(404);
      res.send(`User not found`);
    }
  } catch (err) {
    errorResponse(err, res);
  }
});

userRouter.delete("/users/:id", async (req, res) => {
  try {
    const _id: ObjectId = new ObjectId(req.params.id);
    const index: number = users.findIndex((item) => item._id?.equals(_id));
    if (index !== -1) {
      users.splice(index, 1);
      res.sendStatus(204);
    } else {
      res.status(404);
      res.send("User not found");
    }
  } catch (error) {
    errorResponse(error, res);
  }
});

export default userRouter;
