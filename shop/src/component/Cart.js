import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

function Cart(props) {
  let [alert, setAlert] = useState(true);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {props.state.map((a, i) => {
            return (
              <tr key={i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.quan}</td>
                <td>
                  <button
                    onClick={() => {
                      props.dispatch({ type: "증가", index: i });
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      props.dispatch({ type: "감소", index: i });
                    }}
                  >
                    -
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {alert === true ? (
        <div className="soldOut-yellow">
          <p>지금 구매하시면 신규할인 20%</p>
          <button
            onClick={() => {
              setAlert(false);
            }}
          >
            닫기
          </button>
        </div>
      ) : null}
    </div>
  );
}

function getData(state) {
  return {
    state: state.reducer,
    alertState: state.alertReducer,
  };
}

export default connect(getData)(Cart);
