import { Router } from "express";
import produtoController from "../controllers/produto.controller.js";

const router = Router();

router.get("/produtos", produtoController.getProduto);


export default router;