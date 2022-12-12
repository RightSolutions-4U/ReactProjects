import React from "react";
import memesData from "../memesData"

export default function Meme()
{
    // function handleClick() {
    //     console.log('clicked');
    // }
    const [memeImage, setMemeImage ] = React.useState("https://source.unsplash.com/user/c_v_r/1900x800")
    let url
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        console.log(randomNumber)
        url = memesArray[randomNumber].url
        setMemeImage(url)
        console.log(url)
    }
    return (
        <main>
            <div>{memeImage}</div>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top text"></input>
                <input type="text" className="form--input" placeholder="Bottom text"></input>
                <button onClick={getMemeImage} className="form--button">Get a new image</button>
            </div>
            <img src={memeImage} className="meme--image" alt="asd" />
        </main>
    )
}