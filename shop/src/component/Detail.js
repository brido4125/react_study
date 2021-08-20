/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useHistory, useParams } from "react-router-dom";

export function Detail(props) {
  let { id } = useParams();
  let index = parseInt(id);
  let history = useHistory();
  //findItem은 useParams()통해 들어온 값과 해당 id값이 동일한 조건을 만족하는 shoes 배열요소이다.
  let findItem = props.shoes.find((e) => {
    return e.id == id; // === 사용시 타입까지 비교하기에 id값을 반환하지 않음
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" + (index + 1) + ".jpg"
            }
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findItem.title}</h4>
          <p>{findItem.content}</p>
          <p>{findItem.price}</p>
          <button className="btn btn-danger">주문하기</button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
