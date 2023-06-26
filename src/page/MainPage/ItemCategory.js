import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { categories } from "../../components/CategoryModal/CategoryLst";

const ItemCategory = () => {
  const { path } = useParams();
  const [idx, setIdx] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    categories.map((item) => {
      if (item.path === path) {
        setIdx(item.id);
        setLoading(false);
      }
    });
  });

  return (
    <div>
      {loading ? (
        <div></div>
      ) : (
        <div>
          <h2>{categories[idx].name}</h2>
          <ul>
            {categories[idx].sub.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ItemCategory;
