import React, { useState } from 'react'
import './App.css';

function App() {

  let [title,titleHandler] = useState(['제목1','제목2','제목3'])
  let[like,likeHandler] = useState([0,0,0])
  let [modal,modalHandler] = useState(false);
  let [modalIndex,modalIndexHandler] = useState(0)
  let [input,setInput] = useState('')

  function changeLikeArray(index){
    let newData = [...like]
    newData[index]++;
    likeHandler(newData)
  }

  function changeTitle(newTitle){
      let newArray = [...title]
      newArray.unshift(newTitle)//제일 앞에 푸쉬
      //newArray.push(newTitle) 
      like.push(0)
      titleHandler(newArray)
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={{color : 'blue',fontSize : '20px'}}>홍대박 블로그</div>
      </div>
      {
        title.map(function(event,index){
          return (
            <div className="list" key={index}>
              <h3 onClick={()=>{modalIndexHandler(index)}}>{event}
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
      <div className="publish">
        <input placeholder="글 제목을 입력하세요" onChange={(e)=>{
        setInput(e.target.value)
        }}/>
        <button onClick={()=>{
          changeTitle(input)
        }}>저장</button>
      </div> 
      <div>
        <button onClick={()=>{modalHandler(!modal)}}>열고닫기</button>
      </div>
      {
        modal === true
        ? <Modal title={title} modalIndex={modalIndex}></Modal>
        : null
      }
      <Profile></Profile>  

    </div>
  );
}


function Modal(props){
  return(
<div className="modal">
        <h2>{props.title[props.modalIndex]}</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

class Profile extends React.Component{
  constructor(){
    super();
    this.state = { name : 'hong', age : 24}
  }
  changeName(){
    this.setState({name : 'daebak'})
  }
  render(){
    return(
      <div>
        <h3>프로필입니다.</h3>
        <p>이름은 {this.state.name} 입니다.</p>
        <button onClick={this.changeName.bind(this)}>홍대박으로 변경 버튼</button>
      </div>
    )
  }
}

export default App;
