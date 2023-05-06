import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { productState } from "../data/productsAtom";
import './styling/viewItems.css';
import Sort from './Sort';
import './styling/sort.css'

const Kiteboards = () => {
  const products = useRecoilValue(productState);
  const [kiteboardProducts, setKiteboardProducts] = useState([]);

  useEffect(() => {
    const filteredLongboardProducts = products.filter((product) =>
      product.name.toLowerCase().includes("kiteboards")
    );
    console.log('productssurf', products)
    setKiteboardProducts(filteredLongboardProducts);
  }, [products]);

  return (
    <div className="product-container">
      <div className="header-container">
        <h2 className="cat-h2">Kiteboards</h2>
        <div className="sort-div">
        <Sort className="sort-btn"/>
        </div>
      </div>
      <ul className="product-ul">
        {kiteboardProducts.map((product) => (
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

export default Kiteboards;
