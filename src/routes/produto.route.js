import { Router } from "express";
import ProductController from "../controllers/product.controller.js";

const productController = new ProductController();
const router = Router();

router.get("/products", productController.getProducts.bind(productController));
router.post("/products", productController.postProduct.bind(productController));

export default router;