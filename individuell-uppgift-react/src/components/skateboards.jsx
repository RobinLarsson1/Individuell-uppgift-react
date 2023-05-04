import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { productState } from "../data/productsAtom";
import './styling/viewItems.css';

const Surfboards = () => {
  const products = useRecoilValue(productState);
  const [skateboardProducts, setSkateboardProducts] = useState([]);

  useEffect(() => {
    // Filtrera produkter baserat på inkluderingen av "surfboard" i namnet
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes("skateboard")
    );
    console.log('productssurf', products)
    setSkateboardProducts(filteredProducts);
  }, [products]);

  return (
    <div className="product-container">
      <h2 className="cat-h2">Skateboards</h2>
      <ul className="product-ul">
        {skateboardProducts.map((product) => (
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
