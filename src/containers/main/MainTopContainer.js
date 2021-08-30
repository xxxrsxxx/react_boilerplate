import React from "react";
import { HookMainView } from "../../store/commerce/main";

function MainTopContainer(props) {
  const { dispatch } = HookMainView();
  const { data } = props;

  return (
    <div className="mainContainer">
      <p>MainContainer</p>
    </div>
  );
}

export default React.memo(MainTopContainer);
