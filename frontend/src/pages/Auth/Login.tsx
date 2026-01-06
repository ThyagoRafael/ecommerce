import { Link } from "react-router-dom";
import Button from "../../components/form/Button";
import Field from "../../components/form/Field";
import styles from "./Auth.module.css";
import type { FormEvent } from "react";

export default function Login() {
	const handleEmailChange = (value: string) => {
		console.log(value);
	};

	const handlePasswordChange = (value: string) => {
		console.log(value);
	};

	const handleSubmitClick = (e: FormEvent) => {
		e.preventDefault();

		alert("Fazendo login...");
	};

	return (
		<section className={styles.container}>
			<h1 className={styles.title}>Login</h1>

			<form className={styles.form}>
				<Field
					label="Email"
					type="email"
					name="email"
					placeholder="Digite o seu email"
					handleChange={handleEmailChange}
				/>

				<Field
					label="Senha"
					type="password"
					name="password"
					placeholder="Digite a sua senha"
					handleChange={handlePasswordChange}
				/>

				<div className={styles.actions}>
					<Button handleClick={handleSubmitClick}>Entrar</Button>
					<p className={styles["action-paragraph"]}>
						Não tem conta? <Link to="/register">Cadastrar-se</Link>
					</p>
				</div>
			</form>
		</section>
	);
}
