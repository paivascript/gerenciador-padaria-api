import express from "express";
import produtoRoute from "./routes/produto.route.js";

const app = express();

console.log("APP CARREGOU");

app.use(express.json());
app.use(produtoRoute);

export default app;