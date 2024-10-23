import { Flex } from "../../common/components/Flex";
import { Link } from "react-router-dom";
import "./Page.css";
// 라우팅을 만들고
export function HomePage() {
  return (
    <Flex.Column className="HomePage">
      <Link to="taejin">
        <h1>태진 페이지로 이동</h1>
      </Link>

      <Link to="hogeun">
        <h1>호근 페이지로 이동</h1>
      </Link>

      <Link to="yousuk">
        <h1>유석 페이지로 이동</h1>
      </Link>
    </Flex.Column>
  );
}
