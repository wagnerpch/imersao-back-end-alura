import express from "express";
import multer from "multer";
import { allPosts, newPost, imageUpload } from "../controllers/postsController.js";

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
    app.get("/posts", allPosts);
    app.post("/post", newPost);
    app.post("/post/upload-image", upload.single("image"), imageUpload);
};

export default routes;
