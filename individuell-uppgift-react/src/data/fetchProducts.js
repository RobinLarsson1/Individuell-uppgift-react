import { url, shopId } from "../data/constants"
import { productState } from "../data/productsAtom"
import { useRecoilState } from "recoil";

export async function fetchProducts() {
	const [products, setProducts] = useRecoilState(productState);
	try {
		const response = await fetch (url + '?action=get-products&shopid=' + shopId)
		const data = await response.json()
		setProducts([...data])
	} catch (error) {
		console.log('Error fetching products:', error)
	}
}