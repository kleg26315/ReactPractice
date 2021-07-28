/* eslint-disable */

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, titleChange] = useState(['남자 코트 추천', '강남 우동 맛집', '리액트독학']);
  let [up, upChange] = useState(0);
  let posts = '강남 고기 맛집';
  let [cnt, cntChange] = useState(0);

  function titleCnt(){
      var newArray = [...title];
      newArray[0] = '여자 코트 추천';
      newArray.sort();
      titleChange(newArray);
  }

  function titleCnt2(){
    if(cnt%2 == 0){
      var newArray = [...title];
      newArray[0] = '여자 코트 추천';
      newArray.sort();
      titleChange(newArray);
    } else{
      var newArray = [...title];
      newArray[0] = '남자 코트 추천';
      newArray.sort();
      titleChange(newArray);
    }
    cntChange(cnt + 1);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ ()=>{ titleCnt() }}>버튼</button>
      <div className="list">
        <h3> {title[0]} <span onClick={ ()=>{ upChange( up + 1 ) } }>👍</span> {up} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> {title[1]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> {title[2]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div> 
  );
}

export default App;
