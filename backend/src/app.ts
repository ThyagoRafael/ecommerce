import express from "express";
import { routes } from "./routes/index.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import cors from "cors";

class App {
	server: express.Express;

	constructor() {
		this.server = express();
		this.middlewares();
		this.routes();
		this.error();
	}

	middlewares() {
		this.server.use(cors({ origin: "http://localhost:5173" }));
		this.server.use(express.json());
	}

	routes() {
		this.server.use("/api", routes);
	}

	error() {
		this.server.use(errorMiddleware);
	}
}

export default new App().server;
