import React, { useState } from "react";
// https://datacenter.taichung.gov.tw/swagger/OpenData/c60986c5-03fb-49b9-b24f-6656e1de02aa API
function Header() {
  const [userArea, setUserArea] = useState("");
  const HeadleSearch = (e) => {
    setUserArea(e.target.value);
  };
  return (
    <div className="header">
      <h1 className="center">台中景點查詢</h1>
      <select onChange={HeadleSearch}>
        <option>請選擇想查詢的區域</option>
        <option value="西區">西區</option>
        <option value="南區">南區</option>
        <option value="北區">北區</option>
        <option value="東區">東區</option>
        <option value="西屯區">西屯區</option>
        <option value="南屯區">南屯區</option>
        <option value="北屯區">北屯區</option>
        <option value="大甲區">大甲區</option>
        <option value="大雅區">大雅區</option>
      </select>
    </div>
  );
}

export default Header;

/* <div className="center">
        給使用者查詢所想要的地區，並把資料用 userArea 紀錄 
        <input
          id="type"
          type="text"
          list="area"
          placeholder="請選擇所要查詢的地區"
          onChange={(e) => {
            setUserArea(e.target.value);
          }}
        />
      </div>
      // datalist的id 相對應 input的list 
      <datalist id="area">
        <option value="西區">西區</option>
        <option value="南區">南區</option>
        <option value="北區">北區</option>
        <option value="東區">東區</option>
        <option value="西屯區">西屯區</option>
        <option value="南屯區">南屯區</option>
        <option value="北屯區">北屯區</option>
        <option value="大甲區">大甲區</option>
        <option value="大雅區">大雅區</option>
      </datalist> */
