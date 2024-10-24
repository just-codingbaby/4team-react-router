import { Flex } from "../../common/components/Flex";
import "./Page.css";
import Weather from "../../common/components/Weather";

export function YousukIntroPage() {
  return (
    <>
      <Flex.Column>
        <div style={{ padding: '50px' }}>
          <h1 className="text">내 이름은 유석</h1>
          <br />
          <h1>현재는 고양시민이죠</h1>
          <h3>본가는 강남구 개포동</h3>
          <br />
          <br />
          <h2>지금까지 나의 발전</h2>
          <br />
          <p>html, css만 배우고 풀스택3기에 합류했고</p>
          <p>힘들게 힘들게 따라가고 있지만</p>
          <p>오늘은 공공API를 통해 동네날씨 정보를 불러와봤어요</p>
        </div>
        <Weather x={57} y={128} />
      </Flex.Column>
    </>
  );
}