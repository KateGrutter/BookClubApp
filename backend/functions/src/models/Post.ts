import { ObjectId } from "mongodb";

export interface Post {
  _id?: ObjectId;
  userName: string;
  thought: string;
}
