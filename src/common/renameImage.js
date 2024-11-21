import fs from "fs";
import path from 'path';

const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
const dir = "uploads/";
const getSafeFilename = (originalName, postId) => {
    const extension = path.extname(originalName).toLowerCase();
    if (!allowedExtensions.includes(extension)) {
      throw new Error('Extensão de arquivo não permitida');
    }
    return `${dir}${postId}${extension}`;
};

export function renameImage(post, req) {
    const imageOriginalName = `${dir}${req.file.originalname}`;
    const imageNameUpdated = getSafeFilename(req.file.originalname,post.insertedId);
    fs.renameSync(imageOriginalName, imageNameUpdated);
};