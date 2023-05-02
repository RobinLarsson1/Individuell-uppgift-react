import React, {useEffect} from "react";
import { useRecoilState } from "recoil";
import { productState } from "../data/productsAtom";
import  productData  from "../data/productData";


const shopId = 1011;
const url = 'https://www.forverkliga.se/JavaScript/api/fe/'





const ViewItems = () => {

	return (
		<div className="product-container">
			<h1>Produkter</h1>
			<ul>
				{productData.map((product) => (
					<li key={product.id} className="product-card">
						<img src={product.img} alt={product.name} className="product-img"/>
						{/* <h2>{product.name}</h2> */}
						<p className="description">{product.description}</p>
						<p className="price">{product.price}kr</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default ViewItems

