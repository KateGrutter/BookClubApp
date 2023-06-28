import { ObjectId } from "mongodb"

export interface Book {
    id?: ObjectId,
    title: string
}