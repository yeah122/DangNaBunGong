import React, {useEffect, useState} from "react";
import Item from "./Item";
import axios from 'axios';

const RecentItem = (props) => {
    const itemLst = props.currentData;

    return (
        <div className="items">
            {itemLst.map((item) => (
                <Item item={item}/>
            ))}
        </div>
    );
};

export default RecentItem;
