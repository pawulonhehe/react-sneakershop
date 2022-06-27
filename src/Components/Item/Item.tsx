import React from "react";
import "./Item.scss";
import yzy from "../../Assets/Images/yzy.jpg";

export const Item = (props: any) => {
  return (
    <div className="Item">
      <div className="item--title">{props.title}</div>
      <div className="item--image">
        <img
          className="item--img"
          src={yzy}
          alt="yzy"
          width="220"
          height="220"
        />
      </div>
      <div className="item--description">
        The Adidas Yeezy 350 Boost v2 is the fifth shoe released in Kanye West’s
        collection. Made with top-of-the-line Primeknit fabric and Boost
        cushioning.
      </div>
      <div className="item--buttonholder">
        <button className="buyitem--button">Buy</button>
      </div>
    </div>
  );
};
