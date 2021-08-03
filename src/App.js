/* eslint-disable */

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '리액트독학']);
  let [up, setUp] = useState([0,0,0]);
  let [cnt, setCnt] = useState(0);
  let [modal, setModal] = useState(false);
  let [bNo, setBNo] = useState(0);
  let [szInput, setSzInput] = useState('');

  let posts = '강남 고기 맛집';

  function titleCnt(){
      var newArray = [...title];
      newArray[0] = '여자 코트 추천';
      newArray.sort();
      setTitle(newArray);
  }

  function titleCnt2(){
    if(cnt%2 == 0){
      var newArray = [...title];
      newArray[0] = '여자 코트 추천';
      newArray.sort();
      setTitle(newArray);
    } else{
      var newArray = [...title];
      newArray[0] = '남자 코트 추천';
      newArray.sort();
      setTitle(newArray);
    }
    setCnt(cnt + 1);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ ()=>{ titleCnt() }}>타이틀 변경 버튼</button>
      {/* <div className="list">
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
      </div> */}

      {
        /*
          JSX안에서 반복문 쓰고 싶을 땐 map()을 사용
        */
        title.map(function(a, i){
          return (
            // map 반복문으로 돌린 HTML에는 key={}가 필요함
            <div className="list" key={i}>
              <h3 onClick={ () => { modal ==  false ? setModal(!modal) : null;  setBNo(i); }}> 
                {a} 
                <span onClick={ ()=>{ 
                 var newUpArray = [...up];
                 newUpArray[i] = up[i] + 1;
                 setUp(newUpArray);} }>
                  👍
                </span> 
                {up[i]}
              </h3>
              <p>2월 17일 발행</p>
              <hr/>
            </div>
          )
        })
      }

      <div className="publish">
        <input id="addPost" onChange={ (e)=>{ setSzInput(e.target.value); } }/>
        <button onClick={ ()=> {
          var newArray = [...title];
          newArray.push(szInput);
          setTitle(newArray);
          
          var newUpArray = [...up];
          newUpArray.push(0);
          setUp(newUpArray);
        } }>저장</button>
      </div>

      <button onClick={ ()=>{ setModal(modal=false);} }> 상세 창 닫기 </button>

      {
        /*
        JSX에선 if를 못 씀 -> 그래서 삼항연산자로 씀
        JSX에선 변수, 함수 쓸 수 있다.
        if(){
          <Modal />
        } else{
          <div></div>
        }
        */
        /*
          컴포넌트끼리 state 전달해주는 법 : props 이용
          1. <자식컴포넌트 작명={state명} />
          2. 자식 컴포넌트에서 props 파라미터 입력 후 사용
        */
       modal == true
       ? <Modal title={title} bNo={bNo}></Modal>
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

function Modal(props){
  return (
    // return 안에는 무조건 div 하나안에 있어야하지만 병렬적인 div를 넣고 싶다면
    // <> </> 로 감싸자
    <>
    <div className="modal">
      <h2>{props.title[props.bNo]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    <div></div>
    </>
  )
}


export default App;
