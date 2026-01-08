import { Link, useNavigate } from "react-router-dom";
import Field from "../../components/form/Field";
import Button from "../../components/form/Button";
import { useState, type FormEvent } from "react";
import styles from "./Auth.module.css";
import axios from "axios";

export default function Register() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		cpf: "",
		phone: "",
	});
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const navigate = useNavigate();

	const handleChange = (name: string, value: string) => {
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleRegister = async (e: FormEvent) => {
		e.preventDefault();

		const requiredFields: (keyof typeof formData)[] = ["name", "email", "password", "cpf"];

		const hasEmptyField = requiredFields.some((field) => !formData[field]);

		if (hasEmptyField) {
			alert("Os campos com asterisco são obrigatórios");
			return;
		}

		try {
			setIsLoading(true);

			const response = await axios.post("http://localhost:3000/api/users/register", formData);
			localStorage.setItem("prefilled_email", response.data.email);
		} catch (error) {
			if (axios.isAxiosError(error)) {
				return alert(error.response?.data.message);
			}

			console.log(error);
			alert("Aconteceu um erro inesperado");
		} finally {
			setIsLoading(false);
		}

		navigateToLogin();
	};

	const navigateToLogin = () => {
		navigate("/login", { replace: true });
	};

	return (
		<section className={styles.container}>
			<h1 className={styles.title}>Cadastro</h1>

			<form className={styles.form}>
				<Field
					label="Nome*"
					type="text"
					name="name"
					placeholder="Digite o seu nome"
					value={formData.name}
					handleChange={handleChange}
				/>

				<Field
					label="Email*"
					type="email"
					name="email"
					placeholder="Digite o seu email"
					value={formData.email}
					handleChange={handleChange}
				/>

				<Field
					label="Senha*"
					type="password"
					name="password"
					placeholder="Digite a sua senha"
					value={formData.password}
					handleChange={handleChange}
				/>

				<Field
					label="CPF*"
					type="text"
					name="cpf"
					placeholder="Digite o seu CPF"
					value={formData.cpf}
					handleChange={handleChange}
				/>

				<Field
					label="Celular"
					type="tel"
					name="phone"
					placeholder="Digite o seu número (opcional)"
					value={formData.phone}
					handleChange={handleChange}
				/>

				<div className={styles.actions}>
					<Button
						handleClick={handleRegister}
						disabled={isLoading}
					>
						Cadastrar
					</Button>
					<p className={styles["action-paragraph"]}>
						Já tem conta? <Link to="/login">Entrar</Link>
					</p>
				</div>
			</form>
		</section>
	);
}
