import React from "react";

const generate = () => {
    let selection = Math.floor(Math.random() * 30)
    return selection
}

export default function meme() {
    return (
        <div>
            <img src={animeMeme}/>
        </div>
    )
}

generate()