import { Link } from "react-router-dom";
import Field from "../../components/form/Field";
import Button from "../../components/form/Button";
import type { FormEvent } from "react";
import styles from "./Auth.module.css";

export default function Register() {
	const handleNameChange = (value: string) => {
		console.log(value);
	};

	const handleEmailChange = (value: string) => {
		console.log(value);
	};

	const handlePasswordChange = (value: string) => {
		console.log(value);
	};

	const handleCpfChange = (value: string) => {
		console.log(value);
	};

	const handleSubmitClick = (e: FormEvent) => {
		e.preventDefault();

		alert("Fazendo cadastro...");
	};

	return (
		<section className={styles.container}>
			<h1 className={styles.title}>Cadastro</h1>

			<form className={styles.form}>
				<Field
					label="Nome"
					type="text"
					name="name"
					placeholder="Digite o seu nome"
					handleChange={handleNameChange}
				/>

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

				<Field
					label="CPF"
					type="text"
					name="cpf"
					placeholder="Digite o seu CPF"
					handleChange={handleCpfChange}
				/>

				<div className={styles.actions}>
					<Button handleClick={handleSubmitClick}>Cadastrar</Button>
					<p className={styles["action-paragraph"]}>
						Já tem conta? <Link to="/login">Entrar</Link>
					</p>
				</div>
			</form>
		</section>
	);
}
