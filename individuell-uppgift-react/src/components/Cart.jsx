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
	const isCartEmpty = useRecoilValue(cartState).length === 0;
	

	const removeFromCart = (productId) => {
		setCart((oldCart) => oldCart.filter(item => item.id !== productId))
	}


	useEffect(() => {
		let total = 0;
		cart.forEach((item) => {
			total += item.price
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
								<p>{item.price} kr</p>
								<div className="cart-btns">
									<button onClick={() => removeFromCart(item.id)}><FiTrash2 /></button>
									<div className="addOrRemove">
										<button onClick={() => decreseQuantity}>-</button>
										<span>1</span>
										<button onClick={() => increaseQuantity}>+</button>
									</div>
								</div>
							</div>
						</li>
					))}
				</ul>
				<h3>Totalpris: {totalPrice > 10000 ? totalPrice.toLocaleString("sv-SE") : totalPrice} kr
				</h3>
			</div>
		</section>
	)
}

export default Cart