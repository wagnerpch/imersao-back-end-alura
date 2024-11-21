import dbConnection from "../config/db.js";

const connection = await dbConnection(process.env.MONGO_URI);

export async function getAllPosts(){
    const db = connection.db("wpch-imersao-back-end-alura");
    const collection = db.collection("posts");
    return collection.find().toArray();
};
