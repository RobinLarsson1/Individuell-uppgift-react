import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { productState } from "../data/productsAtom";
import './styling/viewItems.css';
import Sort from './Sort';
import './styling/sort.css'
import { Link } from "react-router-dom";
import { searchState } from "../data/productsAtom";

const Kiteboards = () => {
  const [products, setProducts] = useRecoilState(productState);
  const [kiteboardProducts, setKiteboardProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useRecoilState(searchState);

  const filteredKiteboardProducts = kiteboardProducts.filter((product) => 
  product.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || 
  product.description.toLocaleLowerCase().includes(searchTerm.toLowerCase())
  )

  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes("kiteboards")
    );
    setKiteboardProducts(filteredProducts);
  }, [products]);

  return (
    <div className="product-container">
      <div className="header-container">
        <h2 className="cat-h2">Kiteboards</h2>
        <div className="sort-div">
        <Sort className="sort-btn"/>
        </div>
      </div>
      {filteredKiteboardProducts.length === 0 ? (
        <p className="no-results">Inga sökresultat hittades :(</p>
      ) : (
      <ul className="product-ul">
        {filteredKiteboardProducts.map((product) => (
          <li key={product.id} className="product-card">
              <Link to={`/products/${product.id}`} className="product-link">
                <img src={product.picture} alt={product.name} className="product-img" />
                <h3>{product.name}</h3>
                <p className="description">{product.description}</p>
                <p className="price">{product.price} kr</p>
              </Link>
          </li>
        ))}
      </ul>
      )}
    </div>
  );
};

export default Kiteboards;
