1. src/common/components/ 경로에 가시면

my_xy.json 이라는 파일이 있습니다.

해당 파일에서 Ctrl + F 검색 기능을 통해

본인 거주지의 X, Y 값을 메모해 주세요

예시)

60, 127

---

2. 본인 작업하고 있는 페이지에서에서 Weather 컴포넌트를 import 해주세요

예시)

```
import Weather from "../../common/components/Weather";
```

---

3. 메모해놓은 X, Y 값을 함께 적어넣으며
   본인 페이지에 Weather 컴포넌트를 삽입해주세요

예시)

```
<Weather x={57} y={128} />
```

---

4. 최종예시

예시)

```
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
```
