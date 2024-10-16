import { useState } from "react";

export default function Question2() {
  const [searchData, setSearchData] = useState("");
  const handelChange = (event) => {
    setSearchData(event.target.value);
    document.body.style.backgroundImage =
      "url('https://hips.hearstapps.com/hmg-prod/images/gettyimages-168966427.jpg')";
    document.body.style.backgroundSize = "contain";
    document.body.style.backgroundPosition = "center";
    document.getElementById("handel").style.visibility="visible"
    
  };

  return (
    <>
    <h1 id="handel" style={{visibility: searchData ? "visible" : "hidden"}}>Handel this you scoundrel</h1>
    <div>
      <input
        type="text"
        value={searchData}
        placeholder="Type stuff here"
        onChange={handelChange}
      ></input>
      </div>
      {searchData && <h1>{searchData}</h1>}
    </>
  );
}
