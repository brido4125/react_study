/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from "react";
import "../Item.scss";
import { Link } from "react-router-dom";
import { stockContext } from "../App";

export function Item(props) {
  let itemList = [...props.shoes];
  let stock = useContext(stockContext);
  return itemList.map((event, index) => {
    return (
      <div className="col-md-3" key={index}>
        <img
          src={
            "https://codingapple1.github.io/shop/shoes" + (index + 1) + ".jpg"
          }
          width="100%"
        />
        <Link className="itemName" to={"/detail/" + index}>
          {props.shoes[index].title}
        </Link>
        <p>
          {props.shoes[index].content} & {props.shoes[index].price}
        </p>
        <p>{stock[index]}</p>
      </div>
    );
  });
}

export default Item;
