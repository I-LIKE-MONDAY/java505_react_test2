import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './App2';
import reportWebVitals from './reportWebVitals';
import NotificationList from "./mounts/NotificationList";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 시작 태그와 끝 태그는 jsx 문법에서 무조건 !!! 있어야 한다.*/}
    {/* <App />  ==  <App></App> */}
    {/* jsx 문법에서 화면을 렌더링 하기 위한 태그의 이름은 반드시 첫글자가 대문자이어야 함 */}
    {/* 대문자를 사용하는 이유는 일반적으로 html 태그를 모두 소문자로 사용하기 때문에
        일반 html 태그인지 jsx 문법으로 생성된 태그인지를 구분하기 위함*/}
    <App2/>
    <NotificationList/>
    <br/><hr/><br/>
    <App />

  </React.StrictMode>
);

reportWebVitals();
