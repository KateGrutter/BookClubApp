import { ObjectId } from "mongodb";

export interface User {
  _id?: ObjectId;
  firstName: string;
  lastName: string;
  memberSince: string;
  userName: string;
}
