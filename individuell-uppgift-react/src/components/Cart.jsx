import React from "react"
import './styling/cart.css'
import { useRecoilValue } from "recoil";
import { cartState } from "../data/productsAtom.js";
import { FiTrash2 } from 'react-icons/fi';
import { useRecoilState } from "recoil";
import { useState } from "react";
import { useEffect } from "react";

const Cart = () => {
	const [cart, setCart] = useRecoilState(cartState);
	const [totalPrice, setTotalPrice] = useState(0);


	const removeFromCart = (productId) => {
		setCart((oldCart) => oldCart.filter(item => item.id !== productId))
	}

	const decreaseQuantity = (productId) => {
		setCart((oldCart) =>
			oldCart.map((item) => {
				if (item.id === productId) {
					const newQuantity = isNaN(item.quantity) ? 0 : item.quantity - 1;
					if (newQuantity < 1) {
						return item; // Om nya mängden är mindre än 1, returnera originalobjektet
					} else {
						return { ...item, quantity: newQuantity }; // Annars returnera en kopia med den nya mängden
					}
				}
				return item;
			})
		);
	};

	const increaseQuantity = (productId) => {
		setCart((oldCart) => oldCart.map(item => {
			if (item.id === productId) {
				const newQuantity = isNaN(item.quantity) ? 1 : item.quantity + 1;
				return { ...item, quantity: newQuantity };
			}
			return item;
		}))
	}


	useEffect(() => {
		let total = 0;
		cart.forEach((item) => {
			total += item.price * item.quantity
		});
		setTotalPrice(total)
	}, [cart]);

	if (cart.length === 0) {
		return (
			<div className="empty-cart">
				<h1>Din varukorg är tom!</h1>
			</div>
		)
	}

	return (
		<section className="cart-container">
			<div className="cart-items">
				<h1>Dina varor</h1>
				<ul className="cart-list">
					{cart.map((item) => (
						<li key={item.id} className="cart-item">
							<img src={item.picture} alt="cart-img" className="cart-img" />
							<div className="cart-text">
								<p>{item.name}</p>
								<p className="cart-price">{item.price} kr</p>
								<div className="cart-btns">
									<div className="quantity">
										<button className="quant-btn" onClick={() => decreaseQuantity(item.id)}>-</button>
										<p className="quantity-p">{item.quantity}</p>
										<button className="quant-btn" onClick={() => increaseQuantity(item.id)}>+</button>
									</div>
										<FiTrash2 className="delete-icon" onClick={() => removeFromCart(item.id)} />
								</div>
							</div>
						</li>
					))}
				</ul>
				<h3 className="cart-total">Total: {totalPrice > 10000 ? totalPrice.toLocaleString("sv-SE") : totalPrice} kr
				</h3>
			</div>
		</section>
	)
}



export default Cart