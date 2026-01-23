import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import styles from "./MainHeader.module.css";

export default function MainHeader() {
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
