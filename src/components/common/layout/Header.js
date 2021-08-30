import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { HookMainView } from "../../../store/commerce/main";

const interfaceNavi = [
  {
    id: 0,
    name: "main",
    title: "메인",
    path: "/",
    active: false,
  },
  {
    id: 1,
    name: "cart",
    title: "서브",
    path: "/sub",
    active: false,
  },
];

function Header(props) {
  const { pathname } = useLocation();
  const { push } = useHistory();
  const [nav, setNav] = useState(interfaceNavi);
  useEffect(() => {
    /**
     * @description  네비게이션 활성화
     */
    const naviActive = nav.map((item) =>
      item.path === pathname ? { ...item, active: !item.active } : item
    );

    setNav(naviActive);
  }, []);

  /**
   * @name linkHandler
   * @description 네비게이션 핸들러
   * @param item
   */
  const linkHandler = (item) => {
    push(item.path);
  };

  return (
    <div className="headerWrap">
      <h1>Header</h1>

    </div>
  );
}
export default Header;
