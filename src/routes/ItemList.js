import React, { useEffect, useState } from "react";
import ItemCategory from "../components/ItemCategory";
import { faker } from "@faker-js/faker/locale/ko";
import Item from "../components/Item";
import { Link } from "react-router-dom";
import CategoryModal from "../components/CategoryModal";
import Footer from "../components/Footer";

const ItemList = () => {
  const [itemLst, setItemLst] = useState([]);

  useEffect(() => {
    const data = Array(57)
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

  console.log(itemLst);
  return (
    <div id="body-wrapper">
      <div id="body-contents">
        <Link to="/">
          <div style={{ height: 100, backgroundColor: "#bdbdbd" }}>
            대충 헤더
          </div>
        </Link>
        <ItemCategory />
        <div className="items">
          {itemLst.map((item) => (
            <Item item={item} />
          ))}
        </div>
        <CategoryModal />
      </div>
      <Footer />
    </div>
  );
};

export default ItemList;
