import { url, shopId } from "./constants.js"
import productData from "./productData.js"


async function addProduct(oneProduct) {


	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(oneProduct)
	}

	const response = await fetch(url, options)
	const statusObject = await response.json()
	console.log('Response from API:', statusObject)
}

async function addAllTheProducts() {
	const products = productData.map(product => ({
		picture: product.img,
		name: product.name,
		description: product.description,
		price: product.price,
		action: 'add-product',
		shopid: shopId
	}));

	console.log(products);

	products.forEach(product => {
		addProduct(product);
	});
}

addAllTheProducts();