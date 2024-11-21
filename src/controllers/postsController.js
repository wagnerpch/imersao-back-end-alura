import { getAllPosts, createPost, imageUploadPost } from "../models/postsModels.js";
import { renameImage } from "../common/renameImage.js";

export async function allPosts (req, res) {
    const posts =  await getAllPosts();
    res.status(200).json(posts);
};

export async function newPost (req, res) {
    const content = req.body;
    try {
        const post = await createPost(content);
        res.status(201).json(post);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({"Erro":"Falha na requisição"});
    }
};

export async function imageUpload (req, res) {
    const content = {
        title: "",
        imgUrl: req.file.originalname,
        alt: ""
    };
    try {
        const post = await imageUploadPost(content);
        renameImage(post, req);
        res.status(201).json(post);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({"Erro":"Falha na requisição"});
    }
};
