// add several products to API


import { url, shopId } from "./constants.js"
import productData from "./productData.js"

// const data = {
// 	action: 'add-product',
// 	name: 'Water pistol',
// 	description: 'Fires cooling streams of water at unsuspecting foes.',
// 	picture: 'insert web URL here',
// 	shopid: shopId
// }
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