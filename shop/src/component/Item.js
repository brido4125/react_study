/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../Item.scss";
import { Link } from "react-router-dom";

export function Item(props) {
  let itemList = [...props.shoes];
  return itemList.map((event, index) => {
    return (
      <div className="col-md-4" key={index}>
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
      </div>
    );
  });
}

export default Item;
