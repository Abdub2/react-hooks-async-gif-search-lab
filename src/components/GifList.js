import React from "react";


function GifList({props}){

    const gifs=props.map((gif,index)=>
        <li key={'gif'+index}>
             <img src={gif} alt="gif"/>
        </li>
    )

    return(
        <div>
            <ul>{gifs}</ul>
        </div>

    )
}

export default GifList;