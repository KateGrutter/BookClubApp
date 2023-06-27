import { ObjectId } from "mongodb";

export interface User {
  _id?: ObjectId;
  firstname: string;
  lastname: string;
  membersince: string;
<<<<<<< HEAD
=======
  email: string;
>>>>>>> 83e2f8471f5c4864602fc029fb8578391e7e3c0a
  username: string;
}
