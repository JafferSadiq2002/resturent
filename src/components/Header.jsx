import React from "react";
import { BsCart3 } from "react-icons/bs";
import DishContext from "../context/Context";
import { useContext } from "react";
const Header = () => {
  const { cartItems } = useContext(DishContext); // Access the cartItems from context
  return (
    <header className="header">
      <h1>UNI resto cafe</h1>
      <nav style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <a>My orders</a>
        <button style={{ background: "none", border: "none", padding: "0" }}>
          <BsCart3 size={30} />
          <sup
            style={{
              position: "relative",
              top: "-15px",
              right: "10px",
              background: "red",
              color: "white",
              borderRadius: "50%",
              padding: "2px 6px",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            {cartItems}
          </sup>
        </button>
      </nav>
    </header>
  );
};

export default Header;
