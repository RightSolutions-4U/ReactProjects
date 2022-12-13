import React from "react"

export default function Star(props)
{
    const starIcon = props.isFilled ?  "filledStar.png" : "emptyStar.png" 
    return(
            <img src={`../images/${starIcon}`} 
                onClick={props.handleClick} 
                className="card--star"
                alt=""
            />
    )
    
}
