import logo from './logo.svg';
import './App.css';
import React, {useEffect,useState} from "react";

function App() {
  const [text,setText] = useState('');
  const [name,setName] = useState('Arsh');

  //variation-1 => every render
  /*
  useEffect ( () => {
    console.log("UI Rendering done");
  });
  */

  //variation-2 first render
  /*
  useEffect (() => {
    console.log("UI Rendering done");
  },[]);
  */

  //variation-3 =>  first render + whenever dependency changes
  /*
  useEffect (() => {
    console.log("Change Observed");
  },[name]);
*/

//variation-4 => to handle unmounting of a component
  useEffect (() => {
    //add event listner
    console.log("Listner Added");
    return  () =>  {
      console.log("Listner Removed"); 
    }
  },[text]);


  function changeHandler(event){
    console.log(text);
    setText(event.target.value );
  }
  return (
    <div className="App">
      <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
