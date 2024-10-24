import { useState } from "react";
import { Flex } from "../../common/components/Flex";
import "./Page.css";

function Sogam() {
  const [word, setWord] = useState('');

  const handleClick = () => {
    setWord('리액트 너무 어려워요');
  }

  return (
    <div>
      <button onClick={handleClick} className="sogam__button">소감 한 마디</button>
      <p>{word}</p>
    </div>
  )
}

export function HaechanIntroPage() {
  return (
    <div className="intro__box">
      <Flex.Column className="flexColumn" > 
        <h1 className="text">정해찬을 소개합니다.</h1>
        <p>진짜 해찬</p>
      </Flex.Column>

      <Flex.Row className="flexRow">
        <h1>지금까지 나의 발전 :</h1>
        <p>프론트엔드에 대해서 알아가는 중</p>
      </Flex.Row>

      <Sogam/>
    </div>
  );
}
