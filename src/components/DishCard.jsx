import React from "react";

const DishCard = (props) => {
  const { dish } = props;
  const {
    dish_name,
    dish_description,
    dish_price,
    dish_image,
    dish_currency,
    dish_calories,
  } = dish;
  return (
    <li
      style={{
        listStyleType: "none",
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "10px",
        margin: "10px",
      }}
    >
      <div className="dish-card">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            fontSize: "15px",
            width: "50%",
          }}
        >
          <h1>{dish_name}</h1>
          <p>
            {dish_currency} {dish_price}
          </p>
          <p>{dish_description}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "stretch",
              gap: "10px",
              alignItems: "stretch",
              backgroundColor: "green",
              color: "white",
              borderRadius: "10px",
              padding: "5px",
              width: "100px",
            }}
          >
            <button className="button"> - </button>
            <p style={{ fontSize: "20px" }}>0</p>
            <button className="button"> + </button>
          </div>
        </div>
        <p style={{ color: "orange" }}>{dish_calories} calories</p>
        <img src={dish_image} alt={dish_name} style={{ width: "100px" }} />
      </div>
    </li>
  );
};

export default DishCard;
// addonCat
// :
// [{…}]
// dish_Availability
// :
// true
// dish_Type
// :
// 1
// dish_calories
// :
// 50
// dish_currency
// :
// "SAR"
// dish_description
// :
// "A 6 oz tenderloin wrapped in bacon and served with pureed yukon gold potatoes and haricots verts"
// dish_id
// :
// "100000008"
// dish_image
// :
// "https://i.imgur.com/nepBV8D.jpg"
// dish_name
// :
// "Traditional Filet Mignon"
// dish_price
// :
// 24
// nexturl
// :
// "http://snapittapp.snapitt.net/api/menu/30/?org=1010000001&branch_id=1000000001
