import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker/locale/ko";
import Item from "./Item";

const RecommendItem = () => {
  const [itemLst, setItemLst] = useState([]);
  const [select, setSelect] = useState([]);
  const selectIndex = (selectRange, cnt) => {
    let randomIdx = [];
    for (let i = 0; i < cnt; i++) {
      const num = Math.floor(Math.random() * selectRange);
      if (randomIdx.indexOf(num) === -1) {
        randomIdx.push(num);
      } else {
        i--;
      }
    }
    return randomIdx;
  };

  useEffect(() => {
    // 백엔드로부터 50개의 상품을 가져오는 코드
    const data = Array(50)
      .fill()
      .map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        region: faker.address.city(),
        imgLink: faker.image.avatar(),
        link: "/asdf/12345",
      }));

    setItemLst(data);
    setSelect(selectIndex(data.length, 15));
  }, []);
  return (
    <div className="items">
      {select.map((idx) => (
        <Item item={itemLst[idx]} />
      ))}
    </div>
  );
};

export default RecommendItem;
