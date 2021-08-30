import React, { useEffect } from "react";
import { loadDummy, HookMainView } from "../../store/commerce/main";
import { MainTopContainer } from "../../containers/main";

function MainPage(props) {
  const { MainStoreState, dispatch } = HookMainView();
  useEffect(() => {
    dispatch(loadDummy());
  }, []);

  return (
    <>
      <MainTopContainer data={MainStoreState} />
    </>
  );
}

export default MainPage;
