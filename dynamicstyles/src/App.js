import React from "react";
import boxes from "./boxes"
import Box from "./Box";

export default function App(props) {
  const [squares, setSquares] = React.useState(boxes)

  // const styles = {
  //     backgroundColor: props.darkMode ? "#222222" : "#cccccc"
  // }

  function toggle(id){
    // console.log("clicked")
    setSquares(prevSquares =>
      {
        return(prevSquares.map((square)=>{
          return square.id===id ? {...square,on: !square.on} : square
        }
        
        ))
        // const newSquares = []
        // for(let i=0; i < prevSquares.length;i++){
        //   const currentSquare = prevSquares[i]
        //   if(currentSquare.id === id){
        //     const updatedSquare = {
        //       ...currentSquare,
        //       on:!prevSquares.on
        //     }
        //     newSquares.push(updatedSquare)
        //   }
        //   else{
        //     newSquares.push(currentSquare)  
        //   }
        // }
        // return newSquares
      }
      )
}

  const squareElements = squares.map(square => (
      // <div style={styles} className="box" key={square.id}></div>
      <Box on={square.on} key={square.id} handleClick={() => toggle(square.id)}/>
    )
  )
  
  return (
      <main>
        {squareElements}
      </main>
  );
}
