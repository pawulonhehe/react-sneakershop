import React from "react";
import "./ItemsContainer.scss";
import { Item } from "../Item/Item";

const props = [
  {
    title: "Yezzy Boost 350 v2",
    description:
      "The Adidas Yeezy 350 Boost v2 is the fifth shoe released in Kanye West’s collection. Made with top-of-the-line Primeknit fabric and Boost cushioning.",
    rating: "5",
    img: "https://grailpoint.com/wp-content/uploads/2022/06/1-yz.png",
    price: 200,
  },
  {
    title: "Yeezy 700",
    description:
      "The 700 runs a little tight the 9 1/2 was too loose for me but the 9 fit little tight but I've been using it and tru is yeezys are comfortable",
    rating: "4",
    img: "https://grailpoint.com/wp-content/uploads/2021/08/artboard-1-5.png",
    price: 300,
  },
  {
    title: "Nike SB Dunk Low Pro",
    description:
      "The 700 runs a little tight the 9 1/2 was too loose for me but the 9 fit little tight but I've been using it and tru is yeezys are comfortable",
    rating: "5",
    img: "https://grailpoint.com/wp-content/uploads/2022/04/1-1.png",
    price: 400,
  },
  {
    title: "Nike Air Max x Parra",
    description:
      "Boost v2 is the fifth shoe released in Kanye West’s collection. Made with top-of-the-line Primeknit fabric",
    rating: "4",
    img: "https://grailpoint.com/wp-content/uploads/2020/04/21.jpg",
    price: 500,
  },
  {
    title: "UNION RETRO I STORM BLUE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: "4.5",
    img: "https://grailpoint.com/wp-content/uploads/2022/06/union4.png",
    price: 450,
  },
  {
    title: "RETRO IV ZEN",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: "5",
    img: "https://grailpoint.com/wp-content/uploads/2022/06/iv.png",
    price: 350,
  },
  {
    title: "RETRO I CURRY",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: "4.5",
    img: "https://grailpoint.com/wp-content/uploads/2022/06/mid1.png",
    price: 420,
  },
  {
    title: "CAMPUS x South Park",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: "3.5",
    img: "https://grailpoint.com/wp-content/uploads/2021/05/13.jpg",
    price: 250,
  },
];

export const ItemsContainer = () => {
  return (
    <div className="ItemsContainer">
      <Item
        title={props[0].title}
        description={props[0].description}
        rating={props[0].rating}
        img={props[0].img}
        price={props[0].price}
      />
      <Item
        title={props[1].title}
        description={props[1].description}
        rating={props[1].rating}
        img={props[1].img}
        price={props[1].price}
      />
      <Item
        title={props[2].title}
        description={props[2].description}
        rating={props[2].rating}
        img={props[2].img}
        price={props[2].price}
      />
      <Item
        title={props[3].title}
        description={props[3].description}
        rating={props[3].rating}
        img={props[3].img}
        price={props[3].price}
      />
      <Item
        title={props[4].title}
        description={props[4].description}
        rating={props[4].rating}
        img={props[4].img}
        price={props[4].price}
      />
      <Item
        title={props[5].title}
        description={props[5].description}
        rating={props[5].rating}
        img={props[5].img}
        price={props[5].price}
      />
      <Item
        title={props[6].title}
        description={props[6].description}
        rating={props[6].rating}
        img={props[6].img}
        price={props[6].price}
      />
      <Item
        title={props[7].title}
        description={props[7].description}
        rating={props[7].rating}
        img={props[7].img}
        price={props[7].price}
      />
    </div>
  );
};
