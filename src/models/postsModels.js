import 'dotenv/config';
import { ObjectId } from "mongodb";
import dbConnection from "../config/db.js";

const connection = await dbConnection(process.env.MONGO_URI);
const dbName = process.env.DB_NAME;
const colletionDb = "posts";

function newConnection() {
    const db = connection.db(dbName);
    return db.collection(colletionDb);
}

export async function getAllPosts(){
    return newConnection().find().toArray();
};

export async function findPostById(id){
    const objId = ObjectId.createFromHexString(id);
    return newConnection().findOne({_id: new ObjectId(objId)});
};

export async function createPost(content){
    return newConnection().insertOne(content);
}

export async function imageUploadPost(content){
    return newConnection().insertOne(content);
}

export async function updatePostById(id, content){
    const objId = ObjectId.createFromHexString(id);
    return newConnection().updateOne({_id: new ObjectId(objId)}, {$set: content});
}

export async function deletePostById(id){
    const objId = ObjectId.createFromHexString(id);
    return newConnection().deleteOne({_id: new ObjectId(objId)});
}
