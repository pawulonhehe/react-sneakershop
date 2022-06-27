import React from "react";
import "./ItemsContainer.scss";
import { Item } from "../Item/Item";

const props = [
  {
    title: "Yezzy Boost 350 v2",
    description:
      "The Adidas Yeezy 350 Boost v2 is the fifth shoe released in Kanye West’s collection. Made with top-of-the-line Primeknit fabric and Boost cushioning.",
    rating: "5",
  },
  {
    title: "Yeezy 700",
    description:
      "The 700 runs a little tight the 9 1/2 was too loose for me but the 9 fit little tight but I've been using it and tru is yeezys are comfortable",
    rating: "4",
  },
  {
    title: "Nike SB Dunk Low Pro",
    description:
      "The 700 runs a little tight the 9 1/2 was too loose for me but the 9 fit little tight but I've been using it and tru is yeezys are comfortable",
    rating: "5",
  },
  {
    title: "Nike Parra Low Pro",
    description:
      "Boost v2 is the fifth shoe released in Kanye West’s collection. Made with top-of-the-line Primeknit fabric",
    rating: "4",
  },
];

export const ItemsContainer = () => {
  return (
    <div className="ItemsContainer">
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
};
