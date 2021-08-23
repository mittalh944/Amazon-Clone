import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ title, image, rating, price, id }) {

  const [{basket}, dispatch]  = useStateValue();
  const addtobasket = ()=>{
    console.log({basket});
    dispatch({
      type: "ADD_TO_BASKET",

      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating
      }

    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" className="product__image" />

      <button className="product__button" onClick = {addtobasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
