import { url, shopId } from './constants.js'

async function getProducts() {
	console.log('Getting products...')
	const response = await fetch(url + '?action=get-products&shopid=' + shopId)
	const data = await response.json()
	console.log('Response from API:', data)

	data.forEach(product => {
        console.log('Product:', product.name);
        console.log('Description:', product.description);
	});
}
getProducts()