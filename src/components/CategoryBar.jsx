import React, { useEffect } from "react";
import DishContext from "../context/Context";
import { useContext } from "react";
const categoriesList = [
  {
    id: 1,
    name: "Salads and Soup",
  },
  {
    id: 2,
    name: "From The Barnyard",
  },
  {
    id: 3,
    name: "From the Hen House",
  },
  {
    id: 4,
    name: "Fresh From The Sea",
  },
  {
    id: 5,
    name: "Biryani",
  },
  {
    id: 6,
    name: "Fast Food",
  },
];
const CategoryBar = () => {
  const { setDishes } = useContext(DishContext);
  const [selectedCategory, setSelectedCategory] = React.useState(
    categoriesList[0].name
  );
  const handleCategoryClick = (name) => {
    setSelectedCategory(name);
    getData();
  };
  useEffect(() => {
    getData();
  }, [selectedCategory]);
  const getData = async () => {
    const response = await fetch(
      `https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details`
    );
    const data = await response.json();
    const categories = data[0].table_menu_list;
    const filteredData = categories.filter((item) => {
      if (item.menu_category === selectedCategory) {
        return item.category_dishes;
      }
    });
    const dishesOgCateogry = filteredData[0].category_dishes;
    setDishes([...dishesOgCateogry]);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div
      className="hide-scrollbar"
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px 0",
        overflow: "scroll",
      }}
    >
      {categoriesList.map((category) => (
        <button
          key={category.id}
          value={category.name}
          style={{
            flexShrink: "0",
            cursor: "pointer",
            background: "none",
            border: "none",
            fontSize: "20px",
            color: "#000",
            padding: "10px 10px",
            borderBottom:
              selectedCategory === category.name ? "2px solid orange" : "none",
          }}
          onClick={() => handleCategoryClick(category.name)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryBar;
