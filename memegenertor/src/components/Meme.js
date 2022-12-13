import React from "react";
import memesData from "../memesData"

export default function Meme()
{
    // function handleClick() {
    //     console.log('clicked');
    // }
    // const [memeImage, setMemeImage ] = React.useState("https://source.unsplash.com/user/c_v_r/1900x800")
    const [meme, setMeme] = React.useState(
        {
            topText : "",
            bottomText:"",
            randomImage:"https://source.unsplash.com/user/c_v_r/1900x800"
        }
    )
    const [allMemeImages, setAllMemeImages]=React.useState(memesData)

    let url
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        url = memesArray[randomNumber].url
        setMeme(prevMeme => (
            {
                ...prevMeme,
                randomImage:url
            }
        ))
    }
    return (
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top text"></input>
                <input type="text" className="form--input" placeholder="Bottom text"></input>
                <button onClick={getMemeImage} className="form--button">Get a new image</button>
            </div>
            <img src={meme.randomImage} className="meme--image" alt="asd" />
        </main>
    )
}