import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from "react";
import NavBar from './components/NavBar.js';
import Filter from './components/Filter.js';
import Cards from './components/Cards.js';
import Spinner from './components/Spinner.js';
import { filterData, apiUrl } from './data.js';
import {toast} from "react-toastify";


function App() {
  const [courses,setCourses] = useState([]); //initialize null  
  const [loading,setLoading] = useState(true); 
  const [category,setCategory] = useState(filterData[0].title);


  useEffect ( () => {
    const fetchData = async() => {
      setLoading(true);
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();
        //save data into a variable
        setCourses(output.data)

      }catch(error){
        toast.error("Something went wrong");
      }
    }
    fetchData();
    setLoading(false);
  },[]);
  return (
    <div className="min-h-screen flex flex-col bg-slate-700">
      <div>
        <NavBar/>
      </div>
      <div className='bg-slate-700'>
        <div>
          <Filter
            filterData = {filterData} 
            category = {category}
            setCategory = {setCategory}
          />
        </div>
        <div className='w-11/12 max-w-[1200px] mx-auto flex-wrap flex justify-center item-center min-h-[50vh]'>
          {
            loading ? (<Spinner/>) : (<Cards courses = {courses} category={category}/>)
          }
        </div>
      </div>
      
    </div>
  );
}

export default App;
