import React, { useState } from "react";
import { url, shopId } from "../data/constants";

const AddUsers = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleAddUser = async (event) => {
    event.preventDefault();
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
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="add-pass">
          <label>Ange lösenord</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="add-user-btn-div">
          <button className="add-user-btn" type="submit">
            Lägg till användare
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUsers;
