import './App.css';
// import Potato from "./Potato";
import PropTypes from "prop-types";

// props : 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하는 매개변수
// props 는 읽기전용
// 사용법 3가지 :
// 컴포넌트명(props) {
//    {props.부모가_전달한_키_이름}
// }

// 컴포넌트명({부모가_전달한_키_이름1, 2, ...}) {
//    {키_이름_1}, {키_이름_2}, ...
//    console.log({키_이름});
// }

// 컴포넌트명(props) {
//    const {키_이름, ...} = props;
//    console.log({키_이름});
// }
function Food({name, pic, rating}) {
  console.log(name);
  return (
    <div>
      <h3>I LOVE {name}</h3>
      <h4>점수 : {rating} / 5.0</h4>
      <img src={pic} alt="..."/>
      <p>-----------------------------------------------------------------------------------------------------------</p>
    </div>
  );
}

const foodList = [
  {
    id : 1,
    name: "명란구이",
    rating: 4.9,
    image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMjlfMjY0%2FMDAxNjQ4NDg2ODg0ODU1.-FRGEeH6bSjWmCQFcNs4R1Q9LourkkzdhePYtuaFNtkg.oswpp9T0mq36Y4SzZoMdKK-jdeWvxUkJmku5F7EDjj8g.JPEG.shorty_%2FIMG_5551.jpg&type=a340",
  },
  {
    id : 2,
    name: "스지전골",
    rating: 4.3,
    image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMjBfMjAy%2FMDAxNjY2MjYzNTA0MTU0._Kjn-tBFmMvbUWZPzD5ZhGXyIhAsFrytrYwIB1wMwkUg.pw7tmJ716ZKS6X6Tsmo-BsWRRMr11LnCv9fWjkbgc4og.JPEG.yeslhong%2FIMG_2835.jpg&type=sc960_832"
  },
  {
    id : 3,
    name: "햄버거",
    rating: 3.7,
    image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEyMDRfMjg5%2FMDAxNjcwMTU1MzEwMTky.kp-QjbGuXA8-ypXo7SNodq01L0f_TqP6C1u9nt6wO7gg.aGwN6d1_SaeK21S6Vfy3obRDwH_NvpjBqqM7nsB5xsIg.JPEG.ssaounara%2F1670155306339.jpg&type=sc960_832"
  }
];


function renderFood(dish) {
  return (
    <Food key={dish.id} name={dish.name} pic={dish.image} rating={dish.rating} />
  );
}

function App() {
  // 이 곳은 일반적인 js(자바스크립트) 소스코드 부분

  // 원래 이렇게 써야 되는데 중괄호 써서 App 내부 처럼 써주면 됨
  // foodList.map(function (dish) {
  //    <Food name={dish.name}/>
  // });

  // return 화면을 생성하는 가상 DOM 부분(Virtual DOM)
  return (  // 여기서 소괄호는 없애도 되고, 놔둬도 됨. 하지만 붙이는게 가독성이 좋음
    // 부모 태그는 반드시 1개만 존재해야함 == <div> 내부에서는 계속 만들어도 됨(렌더링되는 부모태그는 하나만 있어야 하기 때문)
    // jsx 문법에서 class 라는 키워드는 자바스크립트의 클래스 키워드와 겹치기 때문에 자바스크립트의 클래스와 CSS 선택자의 클래스를 구분하기 위해서
    // CSS 선택자를 CSS 선택자인 class 를 className 으로 사용함
    <div className="App">
      {/* SPA(Single Page Application) : index.html 과 같은 하나의 화면 구성 파일로 모든 화면을 구성하는 웹 페이지 */}
      {/* SPA 는 프론트엔드 프레임워크를 사용하여 하나의 화면에서 필요한 부분을 실시간으로 변경하여 웹을 표시함 */}
      {/* 해당 화면을 구성하는 요소를 컴포넌트라고 함. */}
      {/* 컴포넌트 : 리액트에서 화면을 구성하는 요소, 컴포넌트 하나에 js 파일 하나 만드는 것이 좋다. */}

      {/* {} : jsx 문법에서 {} 데이터를 표현하는데 사용함, 간단한 자바스크립트 연산식도 사용이 가능 */}

      {/* Food 라는 컴포넌트에 변수명이 fav 이고, 값이 'kimchi' 인 데이터를 전달  */}
      {/* map 함수를 사용하여  */}
      {/*{foodList.map(dish => <Food name={dish.name} pic={dish.image} />)}*/}
      {/* 위 코드를 간단하게 하려면 APP 바깥쪽에 함수 생성해서 APP 내부에서 아래처럼 쓰면 됨 */}
      {foodList.map(dish => renderFood(dish))}

      <h1>리액트 사용하기</h1>
      <div>
        <div>div 테스트</div>
      </div>
      {/* Food 사용 */}

    </div>
  );
}

// 매개변수로 사용되는 데이터를 체크
// 매개변수의 이름까지 체크할 수 있음
// isRequired : 해당 부분이 반드시 필요하다는 의미, 없으면 오류 발생
Food.propTypes = {
  name: PropTypes.string.isRequired, // 값 안들어오면 오류체크 하라는 뜻
  pic: PropTypes.string.isRequired,
  rating: PropTypes.number
}

// 외부에서 사용할 수 있도록 함 (default : import 할때 중괄호 제외하고 < import App from './App' > )
export default App;
