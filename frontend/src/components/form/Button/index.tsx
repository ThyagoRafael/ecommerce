import type { FormEvent } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
	children: string;
	handleClick: (e: FormEvent) => void;
}

export default function Button({ children, handleClick }: ButtonProps) {
	return (
		<button
			className={styles.button}
			onClick={handleClick}
		>
			{children}
		</button>
	);
}
