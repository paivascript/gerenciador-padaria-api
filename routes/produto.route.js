import { Router } from "express";
import produtoController from "../controllers/produto.controller.js";

const router = Router();

router.get("/produtos", produtoController.getProduto);
router.post("/produtos", produtoController.postProduto)



export default router;