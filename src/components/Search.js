import React from "react";

function Search(props) {
  // get props
  let { setSearchArea, setSearchInput } = props;
  // handle input text
  const handleSearchInput = (event) => {
    setSearchArea(event.target.value);

    // 紀錄是否有搜尋資料
    if (event.target.value) {
      setSearchInput(true);
    } else {
      setSearchInput(false);
    }
  };
  return (
    <div className="center">
      <input placeholder="This is search box" onChange={handleSearchInput} />
    </div>
  );
}

export default Search;
