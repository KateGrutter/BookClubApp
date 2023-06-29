import express from "express";
import { ObjectId } from "mongodb";
import { Post } from "../models/Post";
import { getClient } from "../db";

const postRouter = express.Router();

const posts: Post[] = [];

const errorResponse = (error: any, res: any) => {
  console.error("FAIL", error);
  res.status(500).json({
    message: "Internal server error",
  });
};

postRouter.get("/posts", async (req, res) => {
  try {
    const client = await getClient();
    const posts = await client.db().collection<Post>("posts").find()
    res.status(200).json(posts);
  } catch (err) {
    errorResponse(err, res);
  }
});

postRouter.get("/posts/:id", async (req, res) => {
  try {
    const _id: ObjectId = new ObjectId(req.params.id);
    const result: Post | undefined = posts.find((item) =>
      item._id?.equals(_id)
    );
    if (result) {
      res.status(200);
      res.json(result);
    } else {
      res.status(404).send(`Post not found`);
    }
  } catch (err) {
    errorResponse(err, res);
  }
});

postRouter.post("/posts", async (req, res) => {
  try {
    const newPost: Post = req.body;
    newPost._id = new ObjectId();
    posts.push(newPost);
    res.status(201).json(newPost);
  } catch (err) {
    errorResponse(err, res);
  }
});

postRouter.put("/posts/:id", async (req, res) => {
  try {
    const _id: ObjectId = new ObjectId(req.params.id);
    const post: Post = req.body;
    const index: number = posts.findIndex((item) => item._id?.equals(_id));
    if (index !== -1) {
      posts[index] = post;
      res.status(200);
      res.json(post);
    } else {
      res.status(404);
      res.send(`Place not found`);
    }
  } catch (err) {
    errorResponse(err, res);
  }
});

postRouter.delete("/posts/:id", async (req, res) => {
  try {
    const _id: ObjectId = new ObjectId(req.params.id);
    const index: number = posts.findIndex((item) => item._id?.equals(_id));
    if (index !== -1) {
      posts.splice(index, 1);
      res.sendStatus(204);
    } else {
      res.status(404);
      res.send("Post not found");
    }
  } catch (error) {
    errorResponse(error, res);
  }
});

export default postRouter;
