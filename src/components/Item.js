import React from "react";
import data from "../data/臺中景點"; // [{},{}]
function Item(props) {
  // get props
  let { searchInput, searchAreaExist, currentViewNumber, searchArray } = props;
  // useState
  let viewArray = [];
  let newviewArray = [];
  // 處理json數量 => 之後用infinite scroll處理
  // function loop() {
  //   for (let i = 0; i < currentViewNumber; i++) {
  //     viewArray.push(data[i]);
  //   }
  // }
  // loop();
  if (!searchAreaExist) {
    for (let i = 0; i < currentViewNumber; i++) {
      viewArray.push(data[i]);
    }
  } else {
    for (let i = 0; i < currentViewNumber; i++) {
      newviewArray.push(searchArray[i]);
    }
  }
  // 處理searchArray的數量，剛載入時的le
  // newviewArray.push(searchArray[i]);
  return (
    <main className="item">
      {/* 假如第一次未搜尋資料 => 顯示所有景點以瀑布流呈現 */}
      {!searchInput && !searchAreaExist && (
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
      {searchInput && !searchAreaExist && (
        <div className="errorMessage">無找到景點</div>
      )}
      {/* 假如有搜尋資料 => 顯示 searchAreaArray 內資料 */}
      {searchInput && searchAreaExist && (
        <>
          {newviewArray.map((item) => (
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
