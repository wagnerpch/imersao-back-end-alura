import 'dotenv/config';
import fs from "fs";
import { gerarDescricaoComGemini } from "../services/geminiService.js";

export async function generateImageDescription(id) {
    try {
        const imageBuffer = fs.readFileSync(`${process.env.DIR_UPLOADS}/${id}.jpg`);
        return await gerarDescricaoComGemini(imageBuffer);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({"Erro":"Falha ao gerar a descrição automática da imagem"});
    }
}

export async function imageDescription(req) {
    if (req.body.description == null) {
        return await generateImageDescription(req.params.id);
    } else {
        return req.body.description;
    }
}