import React from "react";

function Scroll(props) {
  let {
    currentViewNumber,
    setCurrentViewNumber,
    viewNumberLimit,
    fullView,
    setFullView,
  } = props;
  // 景色要加的數量
  let addViewNumber = 15;

  // 取得節點
  //   let loading = document.querySelector("loading");
  let loading = document.getElementsByClassName("loading");

  // 取得scroll數值
  window.addEventListener("scroll", () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    //  判斷使用者是否將畫面移動到最底下
    if (scrollTop + clientHeight > scrollHeight - 1.5) {
      // 假如還有資料可以載入
      if (!fullView) {
        console.log("明明已經fullView滿了怎麼還近來");
        // 但這次addViewNumber會爆表
        if (currentViewNumber + addViewNumber >= viewNumberLimit) {
          // 假如當前資料量再加一次會超過極限
          addViewNumber = viewNumberLimit - currentViewNumber;
          showLoading();
          setFullView(true);
          console.log("又近來第一層");
          return;
        } else {
          // addViewNumber不會爆表
          console.log("還來第二層");
          showLoading(); // show the loading animation
        }
      } else {
        // 假如沒有資料可以載入
        console.log("no data");
        return;
      }
    }
    function showLoading() {
      console.log("又觸發");
      loading[0].classList.add("show");
      setTimeout(addSetViewNumber, 1000);
    }
    function addSetViewNumber() {
      setCurrentViewNumber(currentViewNumber + addViewNumber);
      loading[0].classList.remove("show");
    }
  });
  return (
    <div className="loading">
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
    </div>
  );
}

export default Scroll;
