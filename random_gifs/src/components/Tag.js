import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import Spinner from './Spinner';
import useGifs from '../hooks/useGifs';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
    const [tag, setTag] = useState("");
    /*
    const [gif,setGif] = useState("");
    const [loading,setLoading] = useState(false);
    async function fetchData() {
        //console.log(loading);
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
       // const output = await axios.get(url);
        //const imageSource = data.data.images.downsized_large.url;
        //setGif(imageSource);
        //setLoading(false);   

    }
    
    useEffect( () => {
        fetchData();
    },[])
*/
    const {gif, loading, fetchData} = useGifs(tag);

    function clickHandler(tag){
        fetchData();
    }

    function changeHandler(event){
        setTag(event.target.value);
    }
  return (
    <div className='flex flex-col items-center w-1/2  bg-blue-400 rounded-2xl border border-gray-500 gap-y-5 '>
        <h1 className='text-2xl underline uppercase font-bold mt-[10px]'>Random {tag} Gif</h1>
        {
            loading ? 
            (<Spinner/>) :
            (<img src={gif} width={450}></img>)
        }
        <input
            className='w-10/12 text-lg py-2 rounded-xl text-center'
            type='text'
            onChange={changeHandler}
            value={tag}

        />
        <button
            onClick={clickHandler}
            className='bg-white/70 w-10/12 text-lg py-2 rounded-xl hover:bg-white transition-all mb-[20px]'>
            Generate
        </button>
    </div>
  )
}

export default Tag;