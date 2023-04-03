import React, { useState, useEffect } from "react";
import data from "../data/臺中景點"; // [{},{}]
function Item(props) {
  // get props
  let { searchArea, searchInput } = props;
  // useState
  let [searchAreaArray, setSearchAreaArray] = useState([]); // 儲放搜尋到的物件
  let [searchAreaArrayExist, setSearchAreaArrayExist] = useState(false); // 檢查是否有查詢到資料 => 用來畫面的渲染
  let viewArray = [];
  let array = [];
  // 處理json數量 => 之後用infinite scroll處理
  function loop(dataArray) {
    for (let i = 0; i < 20; i++) {
      viewArray.push(dataArray[i]);
    }
  }
  loop(data);
  // 假如 searchArea 有資訊的話就進dataArray匹配
  function checkSearch() {
    for (let i = 0; i < data.length; i++) {
      if (data[i].鄉鎮市區 === searchArea) {
        array.push(data[i]); // 取得所有搜尋的景點物件
        setSearchAreaArray(array);
      }
      if (array.length < 2) {
        setSearchAreaArrayExist(false);
      } else {
        setSearchAreaArrayExist(true);
      }
    }
  }
  // xhr.open(
  //   "get",
  //   "https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c",
  //   true
  // );
  // xhr.send(null);
  // // 取得API資料;
  // xhr.onload = () => {
  //   area.push(JSON.parse(xhr.responseText));
  //   // 紀錄所需資料
  //   area[0].data.XML_Head.Infos.Info.map((item) => {
  //     setAreaId(...areaId, item.Id);
  //     setAreaName(...areaName, item.Name);
  //     setAreaPicture1(...areaPicture1, item.Picture1);
  //   });
  // };
  useEffect(() => {
    checkSearch();
  }, [searchArea]);
  return (
    <main className="item">
      {/* 假如第一次未搜尋資料 => 顯示所有景點以瀑布流呈現 */}
      {!searchInput && !searchAreaArrayExist && (
        <>
          {viewArray.map((item) => (
            <ul className="view-card" key={item.景點ID}>
              <li className="info">
                {item.鄉鎮市區} {item.地址}
              </li>
              <li className="info">{item.名稱}</li>
              <li className="info">{item.簡述}</li>
            </ul>
          ))}
        </>
      )}
      {/* 假如查無搜尋資料 => 發出提示語 */}
      {searchInput && !searchAreaArrayExist && (
        <div className="errorMessage">無找到景點</div>
      )}
      {/* 假如有搜尋資料 => 顯示 searchAreaArray 內資料 */}
      {searchInput && searchAreaArrayExist && (
        <>
          {searchAreaArray.map((item) => (
            <ul className="view-card" key={item.景點ID}>
              <li className="info">
                {item.鄉鎮市區} {item.地址}
              </li>
              <li className="info">{item.名稱}</li>
              <li className="info">{item.簡述}</li>
            </ul>
          ))}
        </>
      )}
    </main>
  );
}

export default Item;

// 高雄景點 ： https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c

// 台中景點 ： https://datacenter.taichung.gov.tw/swagger/OpenData/c60986c5-03fb-49b9-b24f-6656e1de02aa
