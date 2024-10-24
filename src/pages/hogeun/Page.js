import { Flex } from "../../common/components/Flex";
import "./Page.css";
import Weather from "../../common/components/Weather";

export function HogeunIntroPage() {
  return (
    <Flex.Column>
      <h1 className="text">안녕하세요 배호근입니다.</h1>
      <h1 className="text">코딩, 너무 어렵고 화나지만 후회가 남지 않도록 꾸준히 해서 여포 같은 실력으로 성장하여 수료하겠습니다.</h1>
      <h2>참고로 밑에 데이터는 팀장님이 같이 도와주셨습니다! 감사합니다 팀장님!</h2>
      <Weather x={61} y={126} />
    </Flex.Column>
  );
}
