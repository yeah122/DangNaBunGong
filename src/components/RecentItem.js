import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker/locale/ko";
import Item from "./Item";

const RecentItem = () => {
  const [itemLst, setItemLst] = useState([]);

  useEffect(() => {
    //백엔드로부터 최근 15개의 상품을 가져오는 코드
    const data = Array(15)
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
  }, []);

  return (
    <div className="items">
      {itemLst.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
};

export default RecentItem;
