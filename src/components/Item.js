import React from "react";
import { Link } from "react-router-dom";
import "../style/Main.css";

const Item = ({ item }) => {
  return (
    <Link to={item.link}>
      <div className="item">
        <img className="item-img" src={item.imgLink} width={150} height={150} />
        <br />
        <span className="item-name">{item.name}</span>
        <br />
        <span className="item-price">{item.price}원</span>
        <br />
        <span className="item-region">{item.region}</span>
      </div>
    </Link>
  );
};

export default Item;
