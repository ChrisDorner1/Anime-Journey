import React from "react";
import Footer from "./footer"



const generate = () => {
    let selection = Math.floor(Math.random() * 30)
    return selection
}

export default function meme() {
    return (
        <div>
            <img src={animeMeme}/>
            <Footer />
        </div>
    )
}

generate()