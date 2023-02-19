import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/Category.css";

const RecentView = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    // 최근 본 상품을 로컬스토리지에 n개씩 저장하는게 좋을 것 같다
    // 상품을 하나씩 누를 때마다 로컬스토리지에 순서대로 추가
    setItems([
      {
        id: 1,
        img: "https://cdn-icons-png.flaticon.com/128/1514/1514935.png",
        link: "링크주소1",
      },
      {
        id: 2,
        img: "https://cdn-icons-png.flaticon.com/128/990/990403.png",
        link: "링크주소2",
      },
    ]);
  }, []);

  return (
    <div className="category-box recent">
      <span>최근 본 상품</span>
      <ul className="category-lst">
        {items.map((item) => (
          <Link className="category-lst" to={item.link}>
            <li key={item.id}>
              <img src={item.img} height={50} width={50} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default RecentView;
