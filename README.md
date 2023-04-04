# 台中旅遊景點 API

進入畫面後有【搜尋區】，【景點區】。
使用者可以搜尋想要的地區，頁面則會顯示相對應的旅遊景點，可以點進去查看更多的資訊。

## 相關技術

1. 使用 JSON
2. 使用瀑布流呈現畫面
3. 使用 infinite scroll

## 步驟

1. 設計 HTML 畫面 ， 標題、搜尋區、顯示區
2. 取得台中旅遊景點 JSON
   1. 改為 js 檔
   2. 利用 module 匯出資料
3. 限制顯示區數量
   1. 利用 loop 限制取得景點的數量
4. 利用搜尋欄取得搜尋資料
   1. 判斷資料中是否有 input
   2. 將其呈現出來
   3. 用模糊查詢得到相關資料
5. 將顯示區改為瀑布流排版
   1. 利用純 CSS
   2. 利用 Grid 但會是以 column 呈現資料
   3. 要改為 row 方式呈現
6. 將顯示區改為 infinite scroll
   1. 利用 window 偵測 scroll 是否到畫面底部
   2. 添加載入的 ball 圖形 => CSS 製作
   3. 添加載入時上下彈跳的動畫 => animation
   4. 利用改動 view 數量來加載畫面

### XHR 網路取資料

https://www.vialley.com/462/coding101-day1-%E5%AD%B8%E7%BF%92%E4%BD%BF%E7%94%A8xmlhttprequest

### 台中旅遊景點 JSON

https://opendata.taichung.gov.tw/dataset/3b0653b2-1a9f-11e8-8f43-00155d021202

### 瀑布流

https://www.tpisoftware.com/tpu/articleDetails/2604
