import { Link } from "react-router-dom";
import imagemTeste from "../../assets/imagem-teste.png";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import type { Product } from "../../types/Product";
import { formatPrice } from "../../utils/formatPrice";

export default function Home() {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("http://localhost:3000/api/products");

				setProducts(response.data);
			} catch (error) {
				if (axios.isAxiosError(error)) {
					return alert(error.response?.data.message);
				}

				console.error(error);
				alert("Aconteceu um erro inesperado");
			}
		};

		fetchData();
	}, []);

	return (
		<section className={styles.container}>
			<header className={styles.header}>
				<h1 className={styles.title}>Vitrine</h1>
				<h2 className={styles.subtitle}>Aproveite nossas peças com os melhores preços</h2>
			</header>

			<ul className={styles.productsList}>
				{products.length > 0 &&
					products.map((product) => (
						<li key={product.id}>
							<article className={styles.productCard}>
								<Link to={`/produtos/${product.id}`}>
									<figure className={styles.productImage}>
										<img
											src={imagemTeste}
											alt="Nome do produto"
										/>
									</figure>

									<h3
										className={styles.productName}
										title="Nome do produto"
									>
										{product.name}
									</h3>
								</Link>

								<p className={styles.productPrice}>
									<strong>{formatPrice(product.price)}</strong>
								</p>
							</article>
						</li>
					))}
			</ul>
		</section>
	);
}
