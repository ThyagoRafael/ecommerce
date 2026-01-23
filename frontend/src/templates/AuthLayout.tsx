import { Outlet } from "react-router-dom";
import AuthHeader from "../components/header/AuthHeader";
import Footer from "../components/footer/Footer";
import styles from "./Layout.module.css";

export default function AuthLayout() {
	return (
		<div className={styles.container}>
			<AuthHeader />

			<main className={styles.main}>
				<Outlet />
			</main>

			<Footer />
		</div>
	);
}
