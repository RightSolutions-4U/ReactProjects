import './App.css';
import React from "react"

function App() {
  const [starWarData, setStarWarData] = React.useState({})
  // fetch("https://swapi.dev/api/people/1")
  //   .then(res => res.json())
  //   .then(data => setStarWarData(data))
  React.useEffect(function() {
    console.log("effect")
    // fetch("https://swapi.dev/api/people/1")
    //  .then(res => res.json())
  },[starWarData])
  return (
    <div>
      <pre>{JSON.stringify(starWarData,null,2)}</pre>
    </div>
  );
}

export default App;
