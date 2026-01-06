import styles from "./Field.module.css";

interface FieldParams {
	label: string;
	type: string;
	name: string;
	placeholder: string;
	handleChange: (value: string) => void;
}

export default function Field({ label, type, name, placeholder, handleChange }: FieldParams) {
	return (
		<label className={styles.label}>
			{label}
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				onChange={(e) => handleChange && handleChange(e.target.value)}
				className={styles.input}
			/>
		</label>
	);
}
