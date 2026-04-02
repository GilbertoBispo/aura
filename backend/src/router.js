import express from "express";

const router = express.Router();

router.get("/home", (req, res) => {
    res.status(200).json({message: "Teste"});
});

router.post("/novo-post", (req, res) => {
    const postagem = req.body.text;
    console.log(postagem)
    res.status(200).send("Feito")
})

export default router;