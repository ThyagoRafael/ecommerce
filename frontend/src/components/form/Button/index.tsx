import type { FormEvent } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
	children: string;
	handleClick: (e: FormEvent) => void;
	disabled: boolean;
}

export default function Button({ children, handleClick, disabled }: ButtonProps) {
	return (
		<button
			className={styles.button}
			onClick={handleClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
}
