import express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import mainRoutes from "./routes/index";

dotenv.config();


const server = express();


server.set("view", "mustache");
server.set("viewa", path.join(__dirname, "views"));
server.engine("mustache", mustache());

server.use(express.static(path.join(__dirname, "../public")));

// Rotas
server.use(mainRoutes);

// Pagina erro - 404
server.use((req, res)=> {
    res.send("Página não encontrada!")
})


server.listen(process.env.PORT)