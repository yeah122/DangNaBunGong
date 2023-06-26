import React, { useEffect, useState } from "react";
import Item from "./Item";

const RecommendItem = (props) => {
    const itemList = props.popularData;
  return (
    <div className="items">
      {itemList.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
};

export default RecommendItem;
