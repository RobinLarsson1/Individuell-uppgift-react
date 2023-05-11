import React, { useState } from "react";
import { url, shopId } from "../data/constants";
import './styling/addUser.css'
import LoaderLogin from './LoaderLogin';

const AddUsers = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false)

  const checkFormValidity = () => {
    return username.trim() !== "" && password.trim() !== "";
  };

  const handleAddUser = async (event) => {
    event.preventDefault();
    setIsSaving(true);
    const data = {
      action: "add-user",
      shopid: shopId,
      username: username,
      password: password,
    };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, options);
    const statusObject = await response.json();
    setIsSaving(false);
    if (statusObject.status === "success") {
      console.log("User added:", statusObject);
      setUsername("");
      setPassword("");
    } else {
      console.log("Error:", statusObject.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddUser(event);
  };

  return (
    <div className="add-user-container">
      <form className="add-user-form" onSubmit={handleSubmit}>
        <h1>Lägg till användare</h1>
        <div className="add-uname">
          <label> Ange användarnamn </label>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setIsFormValid(checkFormValidity());
            }}
          />
        </div>
        <div className="add-pass">
          <label>Ange lösenord</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setIsFormValid(checkFormValidity());
            }}
          />
        </div>
        {!isFormValid && (
          <p className="form-error">Fyll i alla fält för att spara</p>
        )}
        <div className="add-user-btn-div">
        <button
            className="add-user-btn"
            type="submit"
            disabled={!isFormValid}
          >
            Lägg till användare
          </button>
        </div>
        {isSaving && <LoaderLogin />}
      </form>
    </div>
  );
};

export default AddUsers;
