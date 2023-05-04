import React, { useEffect } from "react";
import { productState, searchState } from "../data/productsAtom";
import productData from "../data/productData";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import './styling/viewItems.css';
import '../index.css'
import { Link } from "react-router-dom";


const ViewItems = () => {
  const searchTerm = useRecoilValue(searchState);
  const products = useRecoilValue(productState);

  // Filtrera produkter baserat på söktermen
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="product-container">
      <h2 className="cat-h2">Alla Produkter</h2>
      <ul className="product-ul">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li key={product.id} className="product-card">
              <Link to={`/products/${product.id}`} className="product-link">
              <img src={product.picture} alt={product.name} className="product-img" />
              <h3>{product.name}</h3>
              <p className="description">{product.description}</p>
              <p className="price">{product.price} kr</p>
              </Link>
            </li>
          ))
        ) : (
          <li className="no-results">Inga produkter hittades :(</li>
        )}
      </ul>
    </div>
  );
}

export default ViewItems;
