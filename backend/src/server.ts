import server from "./app.js";
import { env } from "./config/env.js";

const port = Number(env.PORT) || 3000;

server.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}!`);
});
