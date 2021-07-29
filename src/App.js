/* eslint-disable */

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, titleChange] = useState(['남자 코트 추천', '강남 우동 맛집', '리액트독학']);
  
  let [up, upChange] = useState(0);
  let [cnt, cntChange] = useState(0);
  
  let [modal, modalChange] = useState(false);

  let posts = '강남 고기 맛집';

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
        <p>2월 18일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3 onClick={ () => { modalChange(!modal) }}> {title[2]}</h3>
        <p>2월 19일 발행</p>
        <hr/>
      </div>

      {
        /*
        JSX에선 if를 못 씀 -> 그래서 삼항연산자로 씀
        if(){
          <Modal />
        } else{
          <div></div>
        }
        */
       modal == true
       ? <Modal></Modal>
       : null
      }

    </div> 
  );
}

/*
어떤걸 Component로 만드는게 좋을까
- 반복출현하는 HTML 덩어리들
- 자주 변경되는 HTML UI들
- 다른 페이지 만들 때도 컴포넌트로 만듦

Component 많이 만들면 단점
- state 쓸 때 복잡해짐
(상위 component에서 만든 state 쓰려면 props 문법 이용해야함)
*/

function Modal(){
  return (
    // return 안에는 무조건 div 하나안에 있어야하지만 병렬적인 div를 넣고 싶다면
    // <> </> 로 감싸자
    <>
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    <div></div>
    </>
  )
}


export default App;
