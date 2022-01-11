import React, { useEffect, useState } from 'react';
import axios from 'axios';
import $ from 'jquery';
const RandGif= ()=>{
    const [gif,setGif] = useState([]);
    const getGif = async()=>{
        await axios.get("http://api.giphy.com/v1/gifs/random?api_key=3QDCy7vrNYATU6nWpLPnfmDL6D77Aahk")
        .then(res=>{
          setGif(res.data);
        })
      }
      useEffect(()=>{
        getGif();
      },[])
    
    return(<div className="randogif">
        <p>Please, hit the button to display a random Gif!</p>
        <button onClick={Loadgif(gif)}>
          Load Random Gif
        </button>
    </div>);
}
const Loadgif = (gif)=>{
    
    let diventer = document.createElement("p");
    diventer.innerHTML= "hello from Loadgif";
    $(".randogif").append(diventer);
}
export default RandGif;