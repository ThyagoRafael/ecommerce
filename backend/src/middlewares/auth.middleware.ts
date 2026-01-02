import { type Request, type Response, type NextFunction } from "express";
import { AppError } from "../errors/AppError.js";
import { validateToken } from "../helpers/jwt.js";

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
	const authHeaderExists = req.headers.authorization;

	if (!authHeaderExists) {
		throw new AppError("O token não foi enviado", 404);
	}

	const [, token] = authHeaderExists.split(" ");

	if (!token) {
		throw new AppError("O token está mal formatado", 400);
	}

	const decodedToken = await validateToken(token);

	req.user = {
		...req.user,
		id: decodedToken.userId,
	};

	next();
}
