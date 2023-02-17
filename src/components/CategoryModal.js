import React, { useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "./CategoryLst";
import "../style/Category.css";
import Recent from "./Recent";
import { HiMenu } from "react-icons/hi";

const CategoryModal = () => {
  const [select, setSelect] = useState(0);
  const [hover, setHover] = useState(false);

  // 카테고리 버튼에 마우스 올림 & 마우스 내림
  const onMouseOver = () => {
    setHover(true);
  };
  const onMouseOut = () => {
    setHover(false);
    setSelect(0);
  };

  return (
    <>
      <div
        className="category"
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        <button>
          <HiMenu fontSize={30} />
        </button>

        {hover && (
          <>
            <div className="category-box menu">
              <ul className="category-lst">
                {categories.map((item) => (
                  <Link className="category-lst" to={`/${item.path}`}>
                    <li key={item.id} onMouseOver={() => setSelect(item.id)}>
                      {item.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
      <Recent />
    </>
  );
};

export default CategoryModal;
