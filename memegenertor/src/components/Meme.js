import React from "react";
// import memesData from "../memesData"


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
    const [allMemes, setAllMemes]=React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => {
            //console.log('parsed json', data.data.memes) // access json.body here
            setAllMemes(data.data.memes)
            console.log(allMemes)
        })
    },[])

    let url
    function getMemeImage() {
        // const memesArray = allMemes.data.memes
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        url = allMemes[1].url
        setMeme(prevMeme => (
            {
                ...prevMeme,
                randomImage:url
            }
        ))
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => (
            {
                ...prevMeme,
                [name]:value
            }
        ))

    }
    // console.log(allMemes)
    return (
        <main>
            <div className="form">
                <input 
                    type="text" 
                    className="form--input" 
                    placeholder="Top text" 
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                    ></input>
                <input 
                    type="text" 
                    className="form--input" 
                    placeholder="Bottom text" 
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                    >
                    </input>
                <button onClick={getMemeImage} className="form--button">Get a new image</button>
            </div>
            <div class="meme">
                <img src={meme.randomImage} className="meme--image" alt="asd" />
                <h2 className="meme--text  top">{meme.topText}</h2>
                <h2 className="meme--text  bottom">{meme.bottomText}</h2>
            </div>
            
        </main>
    )
}