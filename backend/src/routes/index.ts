import { Router } from "express";

import { userRoutes } from "./user.routes.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/private", authMiddleware, (req, res) => {
	res.status(200).json({ message: "Você está autenticado" });
});

export { routes };
