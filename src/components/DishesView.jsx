import React from "react";
import { useContext } from "react";
import DishCard from "./DishCard"; // Import the DishCard component
import DishContext from "../context/Context"; // Import the context
const DishesView = () => {
  const { dishes } = useContext(DishContext);

  return (
    <div className="dishes-view">
      {dishes.length === 0
        ? null
        : dishes.map((dish) => <DishCard key={dish.dish_id} dish={dish} />)}
    </div>
  );
};

export default DishesView;
