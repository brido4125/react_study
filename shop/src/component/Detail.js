/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "../Detail.scss";

let Box = styled.div`
  padding: 20px;
`;
let Title = styled.h4`
  font-size: 25px;
  color: ${(props) => props.color};
`;

export function Detail(props) {
  let [alert, setAlert] = useState(true);
  let [value, setValue] = useState("");
  //useEffect는 두번째 인자가 없으면 컴포넌트가 업데이트 될 때마다 실행된다. 그래서 두번째 인자에 해당 state를 넣어서 반복실행을 막아주면 좋다
  //만약 두번째 인자로 빈 배열 [] 을 전달해주면 해당 useEffect는 해당 컴포넌트가 실행됨과 동시에 더이상 실행되지 않는다
  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [alert]);
  let { id } = useParams();
  let index = parseInt(id);
  let history = useHistory();
  //findItem은 useParams()통해 들어온 값과 해당 id값이 동일한 조건을 만족하는 shoes 배열요소이다.
  let findItem = props.shoes.find((e) => {
    return e.id == id; // === 사용시 타입까지 비교하기에 id값을 반환하지 않음
  });
  return (
    <div className="container">
      <Box>
        <Title color="blue">Detail</Title>
      </Box>
      {value}
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      {alert === true ? (
        <div className="soldOut">
          <p>곧 매진!</p>
        </div>
      ) : null}
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
          <p>{findItem.price}원</p>
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
