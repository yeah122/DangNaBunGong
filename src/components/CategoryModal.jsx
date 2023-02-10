import React, { useState } from "react";
import { categories } from "./CategoryLst";

const CategoryModal = () => {
  const [category, setCategory] = useState([]);
  const [selected, setSelected] = useState();
  // 최근 본 상품의 이미지, 링크 정보를 담음
  const [recently, setRecently] = useState([
    {
      url: 0,
      img: 0,
    },
    {
      url: 1,
      img: 1,
    },
  ]);

  return (
    <>
      <div>카테고리</div>
      <div>
        <span>최근본상품</span>
        {recently.map((item) => {
          <span>item.img</span>;
        })}
      </div>
    </>
  );
};

export default CategoryModal;
