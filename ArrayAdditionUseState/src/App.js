import React from "react";
import ReactDOM from "react";

export default function App() {
  const [thingsArray, setThingsArray] = React.useState(["Things 1", "Things 2"]);

  const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

  function addItem()
  {
    setThingsArray(prevThingsArray => {
      return [...prevThingsArray,`Thing ${prevThingsArray.length + 1}`]
    }
    )
  }
  return (
      <div>
        <button onClick={addItem}>Add Item</button>
        {thingsElements}
      </div>
  );
}
