import { Routes, Route } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Home from "../pages/Home";
import AuthLayout from "../templates/AuthLayout";
import MainLayout from "../templates/MainLayout";
import ProductDetails from "../pages/ProductDetails";

export default function Router() {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route
					index
					element={<Home />}
				/>

				<Route
					path="produtos/:productId"
					element={<ProductDetails />}
				/>
			</Route>

			<Route element={<AuthLayout />}>
				<Route
					path="login"
					element={<Login />}
				/>
				<Route
					path="cadastro"
					element={<Register />}
				/>
			</Route>
		</Routes>
	);
}
