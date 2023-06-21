import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import * as functions from "firebase-functions"

dotenv.config();

const uri: string = functions.config().mongodb.uri

const client: MongoClient = new MongoClient(uri);

export const getClient = async () => {
  await client.connect();
  return client;
};
