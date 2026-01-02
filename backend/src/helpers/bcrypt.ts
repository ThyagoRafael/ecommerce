import * as bcrypt from "bcrypt-ts";

export async function encryptPassword(password: string) {
	try {
		const hashedPassword = await bcrypt.hash(password, 10);

		return hashedPassword;
	} catch (error) {
		console.error(error);
		throw new Error("Erro na criptografia da senha");
	}
}

export async function verifyPassword(password: string, hash: string) {
	try {
		const isValidPassword = await bcrypt.compare(password, hash);

		if (!isValidPassword) return false;

		return true;
	} catch (error) {
		console.error(error);
		throw new Error("Erro na validação da senha");
	}
}
