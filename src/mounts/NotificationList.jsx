// NotificationList.jsx

import React from "react";
import Notification from "./Notification";
import notification from "./Notification";

// 댓글 데이터 생성
const reservedNotifications = [
  {id: 1, message: '안녕하세요, 오늘 일정 알려드립니다.'},
  {id: 2, message: '오후 수업 시간입니다.'},
  {id: 3, message: '이제 곧 쉬는 시간입니다.'}
];

// 자바스크립트 타이머 객체 정보를 저장하는 변수 : 2가지(setTimer, setInterval)
// setTimeout : 1회용 타이머, 지정된 시간 이후에 1번 동작, 실행 시 타이머 정보를 반환, 타이머 삭제 시 clearTimeout() 을 사용
// setInterval : 지정된 시간마다 동작하는 타이머, 실행 시 타이머 정보를 반환, 타이머 삭제시 clearInterval() 을 사용
let timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    // 현재 컴포넌트의 상태인 notifications 선언( == notifications 이 빈 배열 타입의 멤버변수가 됨)
    this.state = {
      // 빈 배열 타입인 state 가 생성됨
      notifications: [],
    };
  }

  // 화면에 처음 그려질 내용
  render() {
    return (
      <div>
        {
          // state 의 notifications 배열을 가지고 화면을 그려줌
          // notifications 배열의 기본값이 비었기 때문에 화면에 아무것도 그리지 않음(F5 누르면 아무것도 없다가 나중에 생기는 이유임)
          this.state.notifications.map((item) => {
            return <Notification key={item.id} message={item.message} />;
          })
        }
      </div>
    );
  }

  // render() 함수 실행 후 동작
  componentDidMount() {
    // object 타입의 '확장 표현식'을 통해서 변수 notifications 에 state 가 가지고 있는 notifications 의 데이터를 대입함
    // 확장표현식 : const/let [변수명1, 2, 3, ...] = [원본_배열] → 변수1, 변수2, 변수3, ... 생성
    // object형 확장표현식 : const/let {키이름과같은변수명_1, _2, _3, ...} = {object 타입} → 키 이름과 동일한 변수명에 값이 대입이 됨
    // 여기서 state 자체가 { } 로 감싸져있기때문에 object 타입이고, notifications 가 키이름임.
    const {notifications} = this.state; // == const notifications = this.state.notifications;
    // state 의 notifications 의 데이터가 비어있음 -------> length : 0

    // 타이머를 사용하여 지정된 시간마다 동작하도록 설정함
    timer = setInterval(() => {
      if (notifications.length < reservedNotifications.length) {  // 0 < 3
        const index = notifications.length;
        // 배열 notifications 에 데이터 추가
        notifications.push(reservedNotifications[index]);

        // state 의 상태 수정
        this.setState({
          // this.state 에 있는 notifications 에 현재 componentDidMount 안에 있는 지역변수 notifications 의 데이터를 저장
          notifications: notifications, // 키(←state 의 notifications) : 실제데이터(←componentDidMount() 안의 배열 notifications[...])
          });
      }
      else {
        clearInterval(timer);
      }
    }, 2000);
  }
}

export default NotificationList;