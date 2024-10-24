import { Flex } from "../../common/components/Flex";
import "./Page.css";
import Weather from "../../common/components/Weather";

export function YousukIntroPage() {
  return (
    <Flex.Column>
      <h1 className="text">내 이름은 유석</h1>
      <h1>고양시민이죠</h1>
      <Weather x={57} y={128} />
    </Flex.Column>
  );
}