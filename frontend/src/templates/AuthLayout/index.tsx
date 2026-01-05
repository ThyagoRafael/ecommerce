import { Outlet } from "react-router-dom";
import AuthHeader from "../../components/header/AuthHeader";
import AuthFooter from "../../components/footer/AuthFooter";
import styles from "./AuthLayout.module.css";

export default function AuthLayout() {
	return (
		<div className={styles.container}>
			<AuthHeader />

			<main className={styles.main}>
				<Outlet />
			</main>

			<AuthFooter />
		</div>
	);
}
