import dbConnection from "../config/db.js";

const connection = await dbConnection(process.env.MONGO_URI);
const dbName = "wpch-imersao-back-end-alura";
const colletionDb = "posts";

function newConnection() {
    const db = connection.db(dbName);
    return db.collection(colletionDb);
}

export async function getAllPosts(){
    return newConnection().find().toArray();
};

export async function createPost(content){
    return newConnection().insertOne(content);
}

export async function imageUploadPost(content){
    return newConnection().insertOne(content);
}
