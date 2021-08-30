import React from "react";
import Header from "../components/common/layout/Header";
function BasicLayout(SpecificComponent) {
  const template = () => {
    return (
      <>
        <Header />
        <SpecificComponent />
      </>
    );
  };
  return template;
}

export default BasicLayout;
