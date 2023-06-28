import { ObjectId } from "mongodb";

export interface Meeting {
    _id?: ObjectId,
    date: string,
    time: string,
    location: string,
    information: string
}