import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
 /* 
  const [FirstName,setFirstName] = useState("");
  const [LastName, setLastName] = useState("");

  function changeFirstNameHandler(event){
    //console.log("Printing First Name");
    //console.log(event.target.value);
    setFirstName(event.target.value);
  }

  function changeLastNameHandler(event){
    //console.log("Printing Last Name");
    //console.log(event.target.value);
    setLastName(event.target.value);
  }
    */

  function changeHandler(event){
    const {name,value,checked,type} = event.target
    setFormData(prevFormData => {
      return{
      ...prevFormData,
      //[event.target.name] : event.target.value
      [name]: type === "checked" ? checked : value
      }
    });
  }

  function submitHandler(event){
    event.preventDefault();
    //print
    console.log("Finally Printing the etire form data...");
    console.log(formData);
  }
  const [formData,setFormData] = useState({firstName:"", lastName:"", email:"", comment:"", isVisible:true, mode:"", favCar:""});
  console.log(formData);
  return (
    <div className="App">
      <form onSubmit={submitHandler}> 
        <input type='text' placeholder='Enter first name' onChange={changeHandler} name='firstName' value={formData.firstName}/>
        <br/><br/>
        <input type='text' placeholder='Enter last name' onChange={changeHandler} name='lastName'value={formData.lastName}/>
        <br/><br/>
        <input type='email' placeholder='Enter your email' onChange={changeHandler} name='email' value={formData.email}/>
        <br/><br/>
        <textarea placeholder='Enter your comments' onChange={changeHandler} name='comment' value={formData.comment}/>
        <br/><br/>
        <input type='checkbox' onChange={changeHandler} name='isVisible' checked={formData.isVisible} />
        <label htmlFor='isVisible'>Am I Visible?</label>
        <br/><br/>
        <fieldset>
          <legend>
            Mode:
          </legend>
          <input type='radio' onChange={changeHandler} name='mode' value="OnlineMode" id="OnlineMode" checked = {formData.mode === "OnlineMode"}/>
          <label htmlFor='Onlineode'>Online Mode</label>

          <input type='radio' onChange={changeHandler} name='mode' value="OfflineMode" id="OfflineMode" checked = {formData.mode === "OfflineMode"}/>
          <label htmlFor='Offlinemode'>Offline Mode</label>
        </fieldset>

        <label htmlFor='favCar'>Your Favorite Car: </label>
        <select name='favCar' onChange={changeHandler} id='favCar' value={formData.favCar}>
          <option value="Scorpio">Scorpio</option>
          <option value="Fortuner">Fortuner</option>
          <option value="Verna">Verna</option>
          <option value="Maybach">Maybach</option>

        </select>

        <br/><br/>
        {/*<input type='submit' value="submit"/>*/}
        <button>Send It</button>
      </form>
    </div>
  );
}

export default App;
