import React, {useEffect} from "react";
import { useRecoilState } from "recoil";
import { productState } from "../data/productsAtom";
import  productData  from "../data/productData";
import { useState } from "react";


const shopId = 1011;
const url = 'https://www.forverkliga.se/JavaScript/api/fe/'





const ViewItems = () => {
	const [products, setProducts] = useState([]);
    console.log('viewItems', products.length)
	useEffect(() => {
	  async function fetchProducts() {
		try {
		  const response = await fetch(url + '?action=get-products&shopid=' + shopId);
		  const data = await response.json();
		  setProducts(data);
		} catch (error) {
		  console.error('Error fetching products:', error);
		}
	  }
  
	  fetchProducts();
	}, []);

	return (
		<div>
			<h1>Produkter</h1>
		<div className="product-container">
			<ul>
				{products.map((product) => (
					<li key={product.id} className="product-card">
						<img src={product.picture} alt={product.name} className="product-img"/>
						<h3>{product.name}</h3>
						<p className="description">{product.description}</p>
						<p className="price">{product.price} kr</p>
					</li>
				))}
			</ul>
		</div>
		</div>
	);
}

export default ViewItems

