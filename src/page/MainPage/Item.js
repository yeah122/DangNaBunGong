import React from "react";
import { Link } from "react-router-dom";
import "../../style/Main.css";

const Item = ({ item }) => {
  console.log(item);

  return (
    <Link key={item.article_id} to={item.article_id}>
      <div className="item">
        <img className="item-img" src={item.article_content_fp} width={150} height={150} />
        <br />
        <span className="item-name">{item.article_title}</span>
        <br />
        <span className="item-price">{item.price}원</span>
        <br />
        <span className="item-region">{item.region_name}</span>
      </div>
    </Link>
  );
};

export default Item;
