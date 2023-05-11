import React from "react"
import { useState } from "react";
import { useRecoilState } from "recoil";
import { productState } from "../data/productsAtom";
import './styling/AddProduct.css'


const AddProduct = () => {
	const [products, setProducts] = useRecoilState(productState);
	const [newProductImage, setNewProductImage] = useState("")
	const [newName, setNewName] = useState("")
	const [newPrice, setNewPrice] = useState("")
	const [newDescription, setnewDescription] = useState("")
	const [isFormValid, setIsFormValid] = useState(false);

	const checkFormValidity = () => {
		return (
			newProductImage.trim() !== "" &&
			newName.trim() !== "" &&
			newPrice.trim() !== "" &&
			newDescription.trim() !== ""
		);
	}

	const handleProductSubmit = (event) => {
		event.preventDefault();
		const newProduct = {
			picture: newProductImage,
			name: newName,
			price: newPrice,
			description: newDescription
		};
		setProducts([...products, newProduct]);
		setNewProductImage("")
		setNewName("")
		setNewPrice("")
		setnewDescription("")
		setIsFormValid(false);


	}

	return (
		<form onSubmit={handleProductSubmit} className="add-prod-form">
			<section className="add-sect">
				<div className="add-container">
					<h1>Lägg till produkt</h1>
					<label htmlFor="newProductImage">Bild på produkt:</label>
					<input type="text" placeholder="Kopiera in url" value={newProductImage} onChange={(e) => setNewProductImage(e.target.value)} onBlur={checkFormValidity} />
					<label htmlFor="newName">Namn på produkt: </label>
					<input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} onBlur={checkFormValidity} />
					<label htmlFor="newPrice">Pris på produkt:</label>
					<input type="number" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} className="add-price" onBlur={checkFormValidity} />
					<label htmlFor="newDescription">Produktbeskrivning:</label>
					<textarea type="text" className="add-textarea" value={newDescription} onChange={(e) => setnewDescription(e.target.value)} onBlur={checkFormValidity} />
					<div className="add-btn-div">
						<button
							type="submit"
							className="product-add"
							disabled={!checkFormValidity()}
						>
							Lägg till produkt
						</button>
					</div>
						{!checkFormValidity() && (
							<p className="error-text">Fyll i alla fält för att spara</p>
						)}
				</div>
			</section>
		</form>
	)
}

export default AddProduct


