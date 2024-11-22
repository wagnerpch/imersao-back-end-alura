import 'dotenv/config';
import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();

app.use(express.static(`${process.env.DIR_UPLOADS}`)); //servir arquivos estáticos

routes(app);

app.listen(3000, () => {
    console.log("Servidor escutando...");
});
