import express from "express";
import { allPosts } from "../controllers/postsController.js";

const routes = (app) => {
    app.use(express.json());    
    app.get("/posts", allPosts);
};

export default routes;
