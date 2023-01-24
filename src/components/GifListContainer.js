import React,{useState} from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer(){
    const [img,setImg]=useState([])


    function showSearch(query){
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=a9c7q5MIi25doBdExZQ2XUaLZF78UOu6&rating=g`)
    .then((res) => res.json())
    .then((results)=> {
        const displayedResults=[
            results.data[0].images.original.url,
            results.data[1].images.original.url,
            results.data[2].images.original.url,
        ]
            setImg(displayedResults)
    })
    }

    return(
        <div>
            <GifList props={img}/>
            <GifSearch showSearch={showSearch}/>
        </div>
    )
}

export default GifListContainer;