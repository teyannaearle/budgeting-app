import React from 'react'
import meme from "../meme.jpg"

function Home() {
    return (
        <div id="home">
            <h1><span className="budget">Budget</span><span className="er">(er)</span></h1>
            <p>where you can keep track of those spending habits of yours.</p>
            <img src={meme} id="meme" alt="funny meme about bad spending habits"/> 
        </div>
    )
}

export default Home
