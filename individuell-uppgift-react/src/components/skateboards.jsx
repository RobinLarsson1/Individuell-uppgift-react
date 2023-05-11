import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { productState } from "../data/productsAtom";
import './styling/viewItems.css';
import Sort from './Sort';
import './styling/sort.css'
import { Link } from "react-router-dom";
import { searchState } from "../data/productsAtom";

const Surfboards = () => {
  const [products, setProducts] = useRecoilState(productState);
  const [skateboardProducts, setSkateboardProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useRecoilState(searchState);

  const filteredSkateboardProducts = skateboardProducts.filter((product) => 
  product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
  product.description.toLowerCase().includes(searchTerm.toLowerCase())
  )


  useEffect(() => {
    // Filtrera produkter baserat på inkluderingen av "surfboard" i namnet
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes("skateboard")
    );
    setSkateboardProducts(filteredProducts);
  }, [products]);

  return (
    <div className="product-container">
      <div className="header-container">
        <h2 className="cat-h2">Skateboards</h2>
        <div className="sort-div">
        <Sort className="sort-btn"/>
        </div>
      </div>
      <ul className="product-ul">
        {filteredSkateboardProducts.map((product) => (
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
    </div>
  );
};

export default Surfboards;
