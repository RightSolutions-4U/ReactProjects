import React from "react";
// import katie from "../images/katie-zaferes.jpg"
// import star from "./public/images/star.png"

export default function Card(props) {
    let badgeText
    if(props.openSpots === 0 )
    {
        badgeText = "SOLD OUT"
        console.log("1")
    } else if (props.location === "Online")
    {
        badgeText = "ONLINE"
        console.log("2")
    }
    
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.img}`} alt="katie Zaferes" className="card--image"/>
            <div className="card--stats">
                <img src="../images/star.png" alt="Star" className="card--star"/>
                <span className="gray">{props.rating}</span>
                <span className="gray">{props.reviewCount} . </span>
                <span>{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>

        </div>
    )
}