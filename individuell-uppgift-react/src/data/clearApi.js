import { url, shopId } from "./constants.js"

async function deleteAll() {

	let ids = await getProductsIds()

	ids.forEach(async id => {
		const data = { shopid: shopId, productid: id, action: 'delete-product' }
		const options = {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		}
		const response = await fetch(url, options)
		const statusObject = await response.json()
		console.log('delete status:', statusObject)
	})
}
deleteAll()

async function getProductsIds() {
	console.log('Getting prod...')
	const response = await fetch(url + '?action=get-products&shopid=' + shopId)
	const data = await response.json()
	console.log('Response from api:', data)
	return data.map(product => product.id)
}