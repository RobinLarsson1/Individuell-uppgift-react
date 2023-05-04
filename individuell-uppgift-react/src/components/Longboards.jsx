import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { productState } from "../data/productsAtom";
import './styling/viewItems.css';

const Longboards = () => {
  const products = useRecoilValue(productState);
  const [longboardProducts, setLongboardProducts] = useState([]);

  useEffect(() => {
    const filteredLongboardProducts = products.filter((product) =>
      product.name.toLowerCase().includes("collective")
    );
    console.log('productssurf', products)
    setLongboardProducts(filteredLongboardProducts);
  }, [products]);

  return (
    <div className="product-container">
      <h2 className="cat-h2">Longboards / cruisers </h2>
      <ul className="product-ul">
        {longboardProducts.map((product) => (
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

export default Longboards;
