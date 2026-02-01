import { Router } from "express";
import { ProductImagesController } from "../controllers/productImages.controller.js";
import { uploadMiddleware } from "../middlewares/upload.middleware.js";

const productImageRoutes = Router({ mergeParams: true });
const productImagesController = new ProductImagesController();

productImageRoutes.post("/images", uploadMiddleware.array("images", 8), productImagesController.upload);
productImageRoutes.put("/images", productImagesController.update);

export { productImageRoutes };
