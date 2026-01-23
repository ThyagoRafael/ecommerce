import styles from "./AuthHeader.module.css";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

export default function AuthHeader() {
	return (
		<header className={styles.container}>
			<Link
				to="/"
				className={styles.link}
			>
				<img
					src={logo}
					alt="Logo Davies"
				/>
			</Link>
		</header>
	);
}
