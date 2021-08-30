import React, { useState } from "react";
import { setFilter, HookMainView } from "../../store/commerce/main";

const InterfaceFilter = [
  { id: 0, title: "전체", active: true, type: "all" },
  { id: 1, title: "일반 과일", active: false, type: "normal" },
  { id: 2, title: "과일", active: false, type: "prime" },
];
function SortFilter(props) {
  const { dispatch } = HookMainView();
  const [filters, setFilters] = useState(InterfaceFilter);
  /**
   * @name filterHandler
   * @param {Object} item
   */
  const filterHandler = (item) => {
    // 필터 체크 로직
    const changeFilter = filters.map((el) => {
      return el.id === item.id
        ? { ...el, active: true }
        : { ...el, active: false };
    });
    // set local State
    setFilters(changeFilter);

    // 필터 정보 디스패치
    dispatch(setFilter(item));
  };
  const sortFilterTemplate = () => {
    return (
      <ul>
        {filters.map((item) => (
          <li
            key={`filter_${item.id}`}
            className={`filter_list ${item.active ? "on" : ""}`}
          >
            <button onClick={() => filterHandler(item)}>
              {item.type === "prime" && (
                <span className="prime  bold">{item.type} </span>
              )}
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    );
  };

  return <div className="sortFilterWrap">{sortFilterTemplate()}</div>;
}

export default SortFilter;
