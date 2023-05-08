import React from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { productState } from "../data/productsAtom";
import './styling/productDetails.css'
import { HiTruck } from 'react-icons/hi';
import { useSetRecoilState } from "recoil";
import { cartState } from "../data/productsAtom.js";



const ProductDetails = ({ }) => {
	const { productId } = useParams();
	const [products, setProducts] = useRecoilState(productState);
	const setCart = useSetRecoilState(cartState);

	const product = products.find((product) => product.id.toString() === productId.toString());


	if (!product) {
		return <div>Loading...</div>; // Hantera fall då produkten inte finns eller laddas
	}

	return (
		<div className="detail-container">
			<div className="details-card">
				<img src={product.picture} alt={product.name} className="detail-img" />
				<div className="detail-text">
					<h2>{product.name}</h2>
					<p className="description">{product.description}</p>
					<p className="price">{product.price} kr</p>
					<div className="add-to-cart-div">
				<button onClick={() => setCart((oldCart) => [...oldCart, product])} className="add-to-cart">
					Lägg i Varukorgen
				</button>
				</div>
				</div>
			</div>
			<section >
				<div className="del-box">
					<HiTruck />
				</div>
				<div className="text-box">
					<h4 className="info-h4">2-3 Dagars Leveranstid</h4>
					<p className="info-p">Gäller innom Sverige</p>
				</div>
			</section>
		</div>

	);
};


export default ProductDetails