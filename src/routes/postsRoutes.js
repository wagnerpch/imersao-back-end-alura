import 'dotenv/config';
import express from "express";
import multer from "multer";
import cors from "cors";
import { allPosts, onePost, newPost, imageUpload, updatePost, deletePost } from "../controllers/postsController.js";

const corsOptions = {
    origin: process.env.API_URL,
    optionsSuccessStatus: 200
}; //CORS configuration

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
}); //Windows configuration

const upload = multer({ dest: "./uploads" , storage});

const routes = (app) => {
    app.use(express.json()); 
    app.use(cors(corsOptions));
    app.get("/posts", allPosts);
    app.get("/post/:id", onePost);
    app.post("/post", newPost);
    app.post("/post/upload-image", upload.single("image"), imageUpload);
    app.put("/post/:id", updatePost);
    app.delete("/post/:id", deletePost);
};

export default routes;
