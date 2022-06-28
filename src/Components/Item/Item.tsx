import React from "react";
import "./Item.scss";
import yzy from "../../Assets/Images/yzy.jpg";

interface Props {
  title: string;
  description: string;
  rating?: string;
  img?: string;
  price: number;
}

export const Item = ({ title, description, rating, img, price }: Props) => {
  return (
    <div className="Item">
      <div className="item--title">{title}</div>
      <div className="item--image">
        <img
          className="item--img"
          src={img}
          alt="yzy"
          width="220"
          height="220"
        />
      </div>
      <div className="item--description">{description}</div>
      <div className="item--buttonholder">
        <div className="item--price">{price}$</div>
        <button className="buyitem--button">Buy</button>
      </div>
    </div>
  );
};
