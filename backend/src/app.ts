import express from "express";

class App {
	server: express.Express;

	constructor() {
		this.server = express();
		this.middlewares();
		this.routes();
	}

	middlewares() {
		this.server.use(express.json());
	}

	routes() {
		this.server.use("/", (req, res) => {
			res.json("Hello world");
		});
	}
}

export default new App().server;
