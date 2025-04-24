import React, { useState } from "react";
import DishContext from "./Context";
const DishProvider = ({ children }) => {
  const [dishes, setDishes] = useState([]); // You can set any default data
  const [cartItems, setCartItems] = useState(0); // You can set any default data

  return (
    <DishContext.Provider
      value={{ dishes, setDishes, cartItems, setCartItems }}
    >
      {children}
    </DishContext.Provider>
  );
};

export default DishProvider;
