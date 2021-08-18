import React, { useState } from 'react'
import './App.css';

function App() {

  let [title,titleHandler] = useState(['제목1','제목2','제목3'])
  let[like,likeHandler] = useState([0,0,0])
  let [modal,modalHandler] = useState(false);

  function changeLikeArray(index){
    let newData = [...like]
    newData[index]++;
    likeHandler(newData)
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={{color : 'blue',fontSize : '20px'}}>홍대박 블로그</div>
      </div>
      {
        title.map(function(event,index){
          return (
            <div className="list">
              <h3>{event}
              <span onClick={()=>{
                changeLikeArray(index)
              }}>❤️</span>
              {like[index]}
              </h3>
              <p>8월 18일 발행</p>
              <hr/>
            </div>
          )
        })
      }
    </div>
  );
}

function Modal(){
  return(
<div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
