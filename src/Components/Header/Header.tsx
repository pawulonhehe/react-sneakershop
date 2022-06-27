import React from "react";
import "./Header.scss";

export const Header = () => {
  return (
    <div className="header">
      <div className="header--rbutton__container">
        <button className="header--rbutton">Home</button>
        <button className="header--rbutton">Drops</button>
      </div>
      <div className="header--center">SneakerShop</div>
      <div className="header--lbutton__container">
        <button className="header--lbutton">Cart</button>
      </div>
    </div>
  );
};
