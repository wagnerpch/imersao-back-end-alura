import { getAllPosts, findPostById, createPost, imageUploadPost, updatePostById, deletePostById } from "../models/postsModels.js";
import { renameImage } from "../common/renameImage.js";
import { imageDescription } from "../services/generateImageDescription.js";

export async function allPosts(req, res) {
    const posts =  await getAllPosts();
    res.status(200).json(posts);
};

export async function onePost(req, res) {
    const id = req.params.id;
    const posts =  await findPostById(id);
    res.status(200).json(posts);
};

export async function newPost(req, res) {
    const content = req.body;
    try {
        const post = await createPost(content);
        res.status(201).json(post);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({"Erro":"Falha na requisição"});
    }
};

export async function imageUpload(req, res) {
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

export async function updatePost (req, res) {
    const id = req.params.id;
    const urlImage = `http://localhost:3000/${id}.jpg`;
    try {
        const content = {
            title: req.body.title,
            description: await imageDescription(req),
            imgUrl: urlImage,
            alt: req.body.alt
        };
        const post = await updatePostById(id, content);
        res.status(201).json(post);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({"Erro":"Falha na requisição"});
    }
};

export async function deletePost(req, res) {
    const id = req.params.id;
    const posts =  await deletePostById(id);
    res.status(200).json(posts);
};