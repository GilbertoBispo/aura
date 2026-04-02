import express from "express";
import cors from "cors";
import router from "./router.js";

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(port, () => {
    console.log(`Rodando servidor na porta ${port}`);
});