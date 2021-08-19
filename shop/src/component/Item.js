/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "../images";

export function Item(props) {
  let itemList = [...props.shoes];
  let imageList = [...Image];
  return itemList.map((event, index) => {
    // src = {"https://codingapple1.github.io/shop/shoes" + (index+1) + ".jpg"} or {imageList[index]}

    return (
      <div className="col-md-4" key={index}>
        <img src={imageList[index]} width="100%" />
        <h4>{props.shoes[index].title}</h4>
        <p>
          {props.shoes[index].content} & {props.shoes[index].price}
        </p>
      </div>
    );
  });
}

export default Item;
