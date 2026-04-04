import express from "express";
// importamos a instância de "db" do index.js e a tabela "post" do schema.js
import db from "./db/index.js";
import post from "./db/schema.js"

const router = express.Router();

router.get("/home", async (req, res) => {
    // selecionamos todas as informações de "db" da tabela "post"
    const posts = await db.select().from(post)
    res.status(200).json(posts);
});

router.post("/novo-post", (req, res) => {
    const postagem = req.body.text;
    console.log(postagem)
    res.status(200).send("Feito")
})

export default router;