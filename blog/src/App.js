import React, { useState } from 'react'
import './App.css';

function App() {

  let [글제목,글제목변경] = useState(['제목1','제목2','제목3'])
  let[따봉,따봉변경] = useState(0)

function changeTitle(){
  var newData = [...글제목];
  newData[0] = '수정된 데이터';
  글제목변경(newData);
  console.log(글제목[0])
}

  return (
    <div className="App">
      <div className="black-nav">
        <div style={{color : 'blue',fontSize : '20px'}}>홍대박 블로그</div>
      </div>
      <button onClick={changeTitle}>제목변경</button>
      <div className="list">
        <h3>{글제목[0]} 
        <span onClick={()=>{
          따봉변경(따봉+1)
        }}>👍</span> {따봉} </h3>
        <p>8월 18일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>8월 18일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>8월 18일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
