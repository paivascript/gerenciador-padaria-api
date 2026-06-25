import express from "express";
import produtoRoute from "./routes/produto.route.js";
import cors from "cors";

const app = express();

console.log("APP CARREGOU");

app.use(cors());
app.use(express.json());
app.use(produtoRoute);

export default app;