import React from "react";
import data from "../data/臺中景點"; // [{},{}]
function Search(props) {
  let array = [];
  // get props
  let {
    setSearchInput, // check 是否有搜尋資料
    setSearchArray, // 儲存搜尋到的結果資料
    setCurrentViewNumber, // 搜尋到新區域時要將原本的景色數量重製
    setSearchAreaExist, // check 搜尋資料是否存在
    setViewNumberLimit, // set 景色的上限
    setFullView, // 查詢新區域時要轉為false
  } = props;
  // handle input text
  const handleSearchInput = (event) => {
    setCurrentViewNumber(15);
    setFullView(false);
    checkSearch(event.target.value);
    // 紀錄是否有搜尋資料
    if (event.target.value) {
      setSearchInput(true);
    } else {
      setSearchInput(false);
    }
  };
  // 假如 searchArea 有資訊的話就進dataArray匹配
  function checkSearch(search) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].鄉鎮市區 === search) {
        array.push(data[i]); // 取得所有搜尋的景點物件
      }
    }
    if (array.length < 2) {
      setSearchAreaExist(false);
    } else {
      setSearchAreaExist(true);
      setSearchArray(array);
      setViewNumberLimit(array.length);
    }
  }
  return (
    <div className="center">
      <input placeholder="This is search box" onChange={handleSearchInput} />
    </div>
  );
}

export default Search;
