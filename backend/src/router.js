import express from "express";
// importamos a instância de "db" do index.js e a tabela "post" do schema.js
import db from "./db/index.js";
import post from "./db/schema.js"
import { primaryKey } from "drizzle-orm/gel-core";

const router = express.Router();

router.get("/home", async (req, res) => {
    // selecionamos todas as informações de "db" da tabela "post"
    const posts = await db.select().from(post)
    res.status(200).json(posts);
});

router.post("/novo-post", async (req, res) => {
    const postagem = req.body.text;
    try {
        const response = await db.insert(post).values({
        textPost: postagem
        }).returning();
        res.status(200).send("Postagem adicionada, ", response[0]);
    } catch(err) {
        res.status(500).send("Erro o publicar post.");
    }
});

export default router;