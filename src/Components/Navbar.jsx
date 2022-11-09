import React from "react";
import logo from "../Assets/logo.png";
const Navbar = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding:"0px 20px",
          fontSize: "10px",
          fontWeight: "bold",
          justifyContent:"space-between"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "30px",
            
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} width="26px" height="26px" />
            <h4>Estatery</h4>
          </div>
          <p>Rent</p>
          <p>Buy</p>
          <p>Sell</p>
          <select style={{border:"none"}}>
            <option>Manage Property</option>
            <option>Manage Property</option>
          </select>
          <select style={{border:"none"}}>
            <option>Resources</option>
            <option>Resources</option>
          </select>
        </div>
        <div
          style={{ display: "flex", gap: "30px", flexDirection: "row-reverse" }}
        >
          <button>Login</button>
          <button>SignUp</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
