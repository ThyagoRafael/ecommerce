export type Product = {
	id: number;
	name: string;
	description: string;
	price: number;
	productImages: { id: number; url: string }[];
};
