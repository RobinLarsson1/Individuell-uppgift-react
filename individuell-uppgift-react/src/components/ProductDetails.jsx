import React from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { productState } from "../data/productsAtom";
import './styling/productDetails.css'
import { HiTruck } from 'react-icons/hi';
import { useSetRecoilState } from "recoil";
import { cartState } from "../data/productsAtom.js";
import { useState } from "react";
import { useRecoilValue } from "recoil";


const ProductDetails = ({ }) => {
	const { productId } = useParams();
	const [products, setProducts] = useRecoilState(productState);
	const setCart = useSetRecoilState(cartState);
	const cart = useRecoilValue(cartState);
	const [quantity, setQuantity] = useState(1);

	const product = products.find((product) => product.id.toString() === productId.toString());


	const addToCart = () => {
		// Kolla om produkten redan finns i varukorgen
		const existingProduct = cart.find(item => item.id === product.id);
	
		if (existingProduct) {
		  // Om produkten redan finns i varukorgen, öka mängden för den befintliga produkten
		  setCart((oldCart) =>
			oldCart.map(item => {
			  if (item.id === product.id) {
				return { ...item, quantity: item.quantity + quantity };
			  }
			  return item;
			})
		  );
		} else {
		  // Annars, lägg till den nya produkten med en mängd på 1
		  setCart((oldCart) => [...oldCart, { ...product, quantity }]);
		}
	  };
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
						<button onClick={addToCart} className="add-to-cart">
							Lägg i Varukorgen
						</button>
					</div>
				</div>
			</div>

		</div>

	);
};


export default ProductDetails