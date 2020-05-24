import React from "react";

import Button, {
  ButtonType,
} from "ts-rollup-storybook-system/build/components/Button";

function App() {
  return (
    <div>
      <Button>버튼</Button>
      <Button theme={ButtonType.PRIMARY}>버튼</Button>
      <Button theme={ButtonType.SECONDARY}>버튼</Button>
    </div>
  );
}

export default App;
