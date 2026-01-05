import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import AuthLayout from "../templates/AuthLayout";

export default function Router() {
	return (
		<Routes>
			<Route index element={<Home />} />

			<Route element={<AuthLayout />}>
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
			</Route>
		</Routes>
	);
}
