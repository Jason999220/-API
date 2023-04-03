import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Item from "./components/Item";
import Footer from "./components/Footer";
function App() {
  // useState
  let [searchArea, setSearchArea] = useState([]); // 儲存使用者查詢的名稱
  let [searchInput, setSearchInput] = useState(false); // 紀錄搜尋欄是否為空
  let url =
    "http://api.openweathermap.org/geo/1.0/direct?q=Taichung&appid=1e85467e57c9ec2751e78c62557c6c80";
  return (
    <div className="container">
      <Header />
      <Search setSearchArea={setSearchArea} setSearchInput={setSearchInput} />
      <Item
        searchArea={searchArea}
        setSearchArea={setSearchArea}
        searchInput={searchInput}
      />
      <Footer />
    </div>
  );
}

export default App;
