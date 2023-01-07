import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider";

const Product = ({ image, id, title, price, rating }) => {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image: image,
        price: price,
        rating: rating,
        title: title,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="product_title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(Math.ceil(rating)).fill("⭐")}
          {/* {Array(rating)
            .fill()
            .map(() => {
              return <p>⭐</p>;
            })} */}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
