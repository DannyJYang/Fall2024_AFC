import { useState } from "react";

export default function Fruits() {
  const [selectedFruit, setSelectedFruit] = useState("");

  return (
    <>
      <h1>Pick your fruit</h1>

      <div>
        <button onClick={() => setSelectedFruit("Apple")}>
            Apple
        </button>

        <button  onClick={() => setSelectedFruit("Orange")}>
            Orange
        </button>

        <button  onClick={() => setSelectedFruit("Banana")}>
            Banana
        </button>
      </div>
      {/* <h1>You chose: {selectedFruit}</h1> */}
      {selectedFruit && <h1>You chose: {selectedFruit}</h1>}
    </>
  );
}
