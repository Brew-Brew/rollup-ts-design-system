import React from "react";

import Button, {
  ButtonType,
} from "ts-rollup-storybook-system/build/components/Button";

function App() {
  return (
    <div>
      <h5>TS + Rollup.js + storybook 디자인 시스템 사용 예제</h5>
      <br />
      <Button>버튼</Button>
      <Button theme={ButtonType.PRIMARY}>버튼</Button>
      <Button theme={ButtonType.SECONDARY}>버튼</Button>
    </div>
  );
}

export default App;
