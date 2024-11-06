import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import Spinner from './Spinner';
import useGifs from '../hooks/useGifs';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
/*
    const [gif,setGif] = useState("");
    const [loading,setLoading] = useState(false);
    async function fetchData() {
        //console.log(loading);
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        //const output = await axios.get(url);
        //const imageSource = data.data.images.downsized_large.url;
        //setGif(imageSource);
        //setLoading(false);  
        
        //fetch(url).then((res) => res.json()).then((data) => {console.log(data)});

    }
    
    useEffect( () => {
        fetchData();
    },[])
*/
    const {gif, loading, fetchData} = useGifs();

    function clickHandler(){
        fetchData();
    }
  return (
    <div className='flex flex-col items-center w-1/2  bg-green-400 rounded-2xl border border-gray-500 gap-y-5 '>
        <h1 className='text-2xl underline uppercase font-bold mt-[10px]'>A Random Gif</h1>
        {
            loading ? 
            (<Spinner/>) :
            (<img src={gif} width={450}></img>)
        }
        
        <button
            onClick={clickHandler}
            className='bg-white/70 w-10/12 text-lg py-2 rounded-xl hover:bg-white transition-all mb-[20px]'>
            Generate
        </button>
    </div>
  )
}

export default Random;