import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { productState } from "../data/productsAtom";
import './styling/viewItems.css';

const Surfboards = () => {
  const products = useRecoilValue(productState);
  const [surfboardProducts, setSurfboardProducts] = useState([]);

  useEffect(() => {
    // Filtrera produkter baserat på inkluderingen av "surfboard" i namnet
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes("surfboard")
    );
    console.log('productssurf', products)
    setSurfboardProducts(filteredProducts);
  }, [products]);

  return (
    <div className="product-container">
      <h2 className="cat-h2">Surfboards</h2>
      <ul className="product-ul">
        {surfboardProducts.map((product) => (
          <li key={product.id} className="product-card">
            <img src={product.picture} alt={product.name} className="product-img" />
            <h3>{product.name}</h3>
            <p className="description">{product.description}</p>
              <p className="price">{product.price} kr</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Surfboards;
