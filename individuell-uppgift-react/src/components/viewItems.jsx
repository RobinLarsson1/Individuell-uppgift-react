import React from "react";
import { productState, searchState, isLoggedInState } from "../data/productsAtom";
import productData from "../data/productData";
import { useState } from "react";
import { useRecoilState } from "recoil";
import './styling/viewItems.css';
import '../index.css'
import { Link } from "react-router-dom";
import Sort from './Sort';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { FiTrash2 } from 'react-icons/fi';


const ViewItems = () => {
  const [searchTerm, setSearchTerm] = useRecoilState(searchState);
  const [products, setProducts] = useRecoilState(productState);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const [editProductId, setEditProductId] = useState(null);

  const [tempValues, setTempValues] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  // Filtrera produkter baserat på söktermen
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  const isValid = (product) => {
    const { name, description, price } = tempValues[product.id] || {};
    return Boolean(name && description && price);
  };
  
  const isFormIncomplete = filteredProducts.some((product) => !isValid(product));



  const handleEditClick = (productId) => {
    setEditProductId(productId);
    setTempValues({ [productId]: { name: "", description: "", price: "" } });
  };

  const handleEditChange = (e, productId, field) => {
    const value = e.target.value;
    setTempValues((prev) => ({
      ...prev,
      [productId]: { ...prev[productId], [field]: value },
    }));

    if (
      tempValues[productId]?.name &&
      tempValues[productId]?.description &&
      tempValues[productId]?.price
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleDeleteClick = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts)

  }

  const handleSaveEditClick = (product) => {
    const { name, description, price } = tempValues[product.id];
    const updatedProducts = filteredProducts.map((p) => {
      if (p.id === product.id) {
        return {
          ...p,
          name,
          description,
          price,
        };
      } else {
        return p;
      }
    });
    setProducts(updatedProducts);
    setEditProductId(null);
  };
  
  return (
    <div className="product-container">
      <div className="header-container">
        <h2 className="cat-h2">Alla Produkter</h2>
        <div className="sort-div">
          <Sort className="sort-btn" />
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
                {isLoggedIn && (
                  <MdOutlineModeEditOutline className="edit-icon" onClick={() =>
                    handleEditClick(product.id)
                  } />
                )}
              </Link>
            </li>
          ))
          // finns det inga produkter i sorted och det finns i filtered så visa det
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li key={product.id} className="product-card">
              {product.id === editProductId ? (
                <>
                  <input
                    placeholder={product.name}
                    value={tempValues[product.id]?.name ?? product.name}
                    onChange={(e) => handleEditChange(e, product.id, "name")}
                  />
                  <input
                    placeholder={product.description}
                    value={tempValues[product.id]?.description ?? product.description}
                    onChange={(e) => handleEditChange(e, product.id, "description")}
                  />
                  <input type="number"
                    placeholder={product.price}
                    value={tempValues[product.id]?.price ?? product.price}
                    onChange={(e) => handleEditChange(e, product.id, "price")}
                  />
                  <button
                    onClick={() => handleSaveEditClick(product)}
                    disabled={!isValid(product)}
                  >
                    Spara
                  </button>
                  {isFormIncomplete && <p>Fyll i alla fält för att spara</p>}
                </>
              ) : (
                <>
                  <Link to={`/products/${product.id}`} className="product-link">
                    <img src={product.picture} alt={product.name} className="product-img" />
                  </Link>
                  <h3>{product.name}</h3>
                  <p className="description">{product.description}</p>
                  <p className="price">{product.price} kr</p>
                  {isLoggedIn && (
                    <div className="admin-icon-div">
                      <MdOutlineModeEditOutline
                        className="edit-icon"
                        onClick={() => handleEditClick(product.id)}
                      />
                      <FiTrash2 className="edit-icon" onClick={() => handleDeleteClick(product.id)} />
                    </div>
                  )}
                </>
              )}
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
