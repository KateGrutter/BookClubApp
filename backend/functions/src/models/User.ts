import { ObjectId } from "mongodb";

export interface User {
  _id?: ObjectId;
  firstname: string;
  lastname: string;
  membersince: string;
  email: string;
  username: string;
}
