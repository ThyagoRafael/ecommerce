import { Outlet } from "react-router-dom";
import MainHeader from "../components/header/MainHeader";
import Footer from "../components/footer/Footer";
import styles from "./Layout.module.css";

export default function MainLayout() {
	return (
		<div className={styles.container}>
			<MainHeader />

			<main className={styles.main}>
				<Outlet />
			</main>

			<Footer />
		</div>
	);
}
