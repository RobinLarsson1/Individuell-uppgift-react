import React, { useEffect } from "react";
import { productState, searchState } from "../data/productsAtom";
import productData from "../data/productData";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import './styling/viewItems.css';
import '../index.css'
import { Link } from "react-router-dom";
import Sort from './Sort';


const ViewItems = () => {
  const searchTerm = useRecoilValue(searchState);
  const products = useRecoilValue(productState);
  const [sortedProducts, setSortedProducts] = useState([])

  // Filtrera produkter baserat på söktermen
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="product-container">
      <div className="header-container">
        <h2 className="cat-h2">Alla Produkter</h2>
        <div className="sort-div">
        <Sort className="sort-btn"/>
        </div>
      </div>
      <ul className="product-ul">
        {/* Finns det sorterade produkter, visa detta */}
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <li key={product.id} className="product-card">
              <Link to={`/products/${product.id}`} className="product-link">
                <img src={product.picture} alt={product.name} className="product-img" />
                <h3>{product.name}</h3>
                <p className="description">{product.description}</p>
                <p className="price">{product.price} kr</p>
              </Link>
            </li>
          ))
          // finns det inga produkter i sorted och det finns i filtered så visa det
        ) : filteredProducts.length > 0 ? (
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
