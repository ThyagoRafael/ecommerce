import { Router } from "express";
import { ProductController } from "../controllers/product.controller.js";

const productRoutes = Router();
const productController = new ProductController();

productRoutes.post("/", productController.create);
productRoutes.get("/", productController.getAll);
productRoutes.get("/:productId", productController.getOne);
productRoutes.put("/:productId", productController.update);
productRoutes.delete("/:productId", productController.destroy);

export { productRoutes };
