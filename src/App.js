import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Item from "./components/Item";
import Scroll from "./components/Scroll";
function App() {
  // useState
  let [searchInput, setSearchInput] = useState(false); // 紀錄搜尋欄是否為空 =>searchInput(item)、setSearchInput(search)
  let [currentViewNumber, setCurrentViewNumber] = useState(15); // 紀錄現在該加載到多少景色 => 假如偵測滾到最底層(Scroll)就調整數量回傳給Item
  let [searchArray, setSearchArray] = useState([]); // 儲放搜尋到的物件 =>searchArray(item)、setSearchArray(search)
  let [searchAreaExist, setSearchAreaExist] = useState(false); // 檢查是否有查詢到資料 => 用來畫面的渲染
  // 限制viewNumber數量假如沒資料時就不要再動作
  let [viewNumberLimit, setViewNumberLimit] = useState(50);
  // 判斷是否還可以載入新資料
  const [fullView, setFullView] = useState(false); // fullView(Scroll)，setFullView(Scroll、Search)
  return (
    <div className="container">
      <Header />
      <Search
        setSearchInput={setSearchInput}
        setSearchArray={setSearchArray}
        setCurrentViewNumber={setCurrentViewNumber}
        setSearchAreaExist={setSearchAreaExist}
        setViewNumberLimit={setViewNumberLimit}
        setFullView={setFullView}
      />
      <Item
        searchInput={searchInput}
        currentViewNumber={currentViewNumber}
        searchArray={searchArray}
        searchAreaExist={searchAreaExist}
      />
      <Scroll
        currentViewNumber={currentViewNumber}
        setCurrentViewNumber={setCurrentViewNumber}
        viewNumberLimit={viewNumberLimit}
        fullView={fullView}
        setFullView={setFullView}
      />
    </div>
  );
}

export default App;
