import React, { useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "./CategoryLst"; //카테고리 리스트 db에서 받아오기
// import { productCategory } from "./CategoryLst copy";
import "../../style/Category.css"; 
import RecentView from "../RecentView/RecentView";
import { HiMenu } from "react-icons/hi";
import groupBy from "json-groupby";

const CategoryModal = () => {
  const [ctgr, setCtgr] = useState(0);
  const [subCtgr, setSubCtgr] = useState([]);
  const [hoverBtn, setHoverBtn] = useState(false);
  const [hoverCtgr, setHoverCtgr] = useState(false);
  const [hoverSubCtgr, setHoverSubCtgr] = useState(false);
  let subMenu = null;

  if(window.localStorage.getItem("category") != null && window.localStorage.getItem("category") != ""){
    var groupBy = require('json-groupby'); //npm install json-groupby
    const productCategory = JSON.parse(window.localStorage.getItem("category"));
    let categoryGroupBy = groupBy(productCategory, ['bcategory', 'bcategoryen']);
  }

  //let categories = Object.keys(categoryGroupBy).map(item => ({"name":item, "name_en": Object.keys(categoryGroupBy[item])[0], "sub":categoryGroupBy[item][Object.keys(categoryGroupBy[item])[0]]}));

  // 카테고리 버튼에 마우스 올림 & 마우스 내림
  const onMouseOver = () => {
    setHoverBtn(true);
  };
  const onMouseOut = () => {
    setHoverBtn(false);
    setSubCtgr([]);
    setCtgr(0);
  };

  // 특정 카테고리에 마우스 올림 & 마우스 내림
  const onMouseOverCtgr = (subLst) => {
    setHoverCtgr(true);
    setSubCtgr(subLst);
  };
  const onMouseOutCtgr = () => {
    setHoverCtgr(false);
    setHoverBtn(false);
    //setCtgr(0);
  };

  if(hoverCtgr){
    let height = document.querySelector('.category-box.menu').clientHeight;
    subMenu = <>
                <div className="category-box submenu" style={{'height':height}} onMouseLeave={()=>{ setHoverCtgr(false);}}>
                  {/*  */}
                  <ul className="category-lst">
                    {/*  */}
                    {subCtgr.map((item) => (
                      <Link className="category-lst" to={`/${item.bcategory + "/" + item.pcategoryid}`}>
                        <li key={item.pcategoryid} onMouseOver={() => {/*console.log(item.scategory);*/}} >
                          {item.scategory}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              </>
  }

  return (
    <>
      <div className="category" onMouseOver={onMouseOver} >
        <button onMouseOut={()=>{onMouseOut();}}>
          <HiMenu fontSize={30} />
        </button>

        {hoverBtn && (
          <>
            <div className="" onMouseLeave={()=>{onMouseOutCtgr();}}>
              <div className="category-box menu">
                <ul className="category-lst">
                  {categories.map((item) => (
                    <Link className="category-lst" to={`/${item.name_en}`} onMouseOver={() => {onMouseOverCtgr(item.sub);}}>
                      <li key={item.id} >
                        {item.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
              {subMenu}
            </div>
          </>
        )}

      </div>
      <RecentView />
    </>
  );
};

export default CategoryModal;
