import jwt, { type JwtPayload, type SignOptions } from "jsonwebtoken";
import { authConfig } from "../config/auth.js";

interface TokenPayload extends JwtPayload {
	userId: number;
}

const options: SignOptions = {
	...(authConfig.expiresIn && { expiresIn: authConfig.expiresIn }),
};

export function generateToken(userId: number) {
	try {
		const token = jwt.sign({ userId }, authConfig.secret, options);

		return token;
	} catch (error) {
		console.log(error);
		throw new Error("Erro na geração de token");
	}
}

export async function validateToken(token: string) {
	try {
		const decoded = await jwt.verify(token, authConfig.secret);

		return decoded as TokenPayload;
	} catch (error) {
		console.error(error);
		throw new Error("Erro na verificação do token");
	}
}
