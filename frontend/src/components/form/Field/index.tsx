import styles from "./Field.module.css";

interface FieldParams {
	label: string;
	type: React.HTMLInputTypeAttribute;
	name: string;
	placeholder: string;
	value: string;
	handleChange: (name: string, value: string) => void;
}

export default function Field({ label, type, name, placeholder, value, handleChange }: FieldParams) {
	return (
		<div>
			<label className={styles.label}>{label}</label>
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={(e) => handleChange && handleChange(name, e.target.value)}
				className={styles.input}
			/>
		</div>
	);
}
