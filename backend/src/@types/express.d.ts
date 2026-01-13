import "express";
import type { Role } from "../types/role.ts";

declare module "express-serve-static-core" {
	interface Request {
		user?: {
			id: number;
			role: Role;
		};
	}
}
