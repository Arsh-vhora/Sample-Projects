import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
//const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
//const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGifs = (tag) => {
    const [gif,setGif] = useState("");
    const [loading,setLoading] = useState(false);
    async function fetchData(tag) {
        //console.log(loading);
        setLoading(true);
        //const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
       // const output = await axios.get(tag ? `${url}&tag=${tag}` : url);
        //const imageSource = data.data.images.downsized_large.url;
        //setGif(imageSource);
        //setLoading(false);   

    }
    
    useEffect( () => {
        fetchData();
    },[])

    return {gif, loading, fetchData};
}

export default useGifs