import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    country:"",
    streetaddress:"",
    city:"",
    state:"",
    postalCode:"",
    comments:false,
    candidates:false,
    offers:false,
    pushNotification:""



  });

  function changeHandler(event){
    const {name, value, checked, type} = event.target;
    setFormData((prev) => ({...prev,[name]:type === "checkbox" ? checked : value }));
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Finally printing the value of Form Data..");
    console.log(formData);
  }
  return (
    <div className="flex flex-col items-center mt-2">
      <form onSubmit={submitHandler}>
        <label htmlFor='firstName'>First Name:</label>
        <br/>
        <input type='text' name='firstName' id='firstName' 
          placeholder='Arsh' value={formData.firstName} 
          onChange={changeHandler}
          className='outline'
        />

        <br/>

        <label htmlFor='lastName'>Last Name:</label>
        <br/>
        <input type='text' name='lastName' id='lastName' 
          placeholder='Vhora' value={formData.lastName} 
          onChange={changeHandler}
          className='outline'
        />

        <br/>

        <label htmlFor='email'>Email Address:</label>
        <br/>
        <input type='email' name='email' id='email' 
          placeholder='arshvhora16@gmail.com' value={formData.email} 
          onChange={changeHandler}
          className='outline'
        />

        <br/><br/>

        <label htmlFor='country'>Country</label>
        <br/>
        <select id='country' name='country' value={formData.country} className='outline'>

          <option >India</option>
          <option >United States</option>
          <option >Canada</option>
          <option >Mexico</option>

        </select>

        <br/>
        <br/>

        <label htmlFor='streetaddress'>Street Address:</label>
        <br/>
        <input type='text' name='streetaddress' id='streetaddress' 
          placeholder='Al-Mannat Residency' value={formData.streetaddress} 
          onChange={changeHandler}
          className='outline'
        />

        <br/>

        <label htmlFor='city'> City:</label>
        <br/>
        <input type='text' name='city' id='city' 
          placeholder='Anand' value={formData.city} 
          onChange={changeHandler}
          className='outline'
        />

        <br/>

        <label htmlFor='state'> State / Province:</label>
        <br/>
        <input type='text' name='state' id='state' 
          placeholder='Gujarat' value={formData.state} 
          onChange={changeHandler}
          className='outline'
        />

        <br/>

        <label htmlFor='postalCode'> ZIP / Postal Code:</label>
        <br/>
        <input type='text' name='postalCode' id='postalCode' 
          placeholder='388001' value={formData.postalCode} 
          onChange={changeHandler}
          className='outline'
        />

        <br/>

        <fieldset>
          <legend>By Email:</legend>
          <div className='flex'>
            <input type='checkbox' id='comments' name='comments' 
                  checked={formData.comments} onChange={changeHandler}/>
            <div>
              <label htmlFor='comments'> Comments:</label><br/>
              <p>Get notified when someone posts a comment on a posting.</p>
            </div>
          </div>
          
          
          <div className='flex'>
            <input type='checkbox' id='candidates' name='candidates' 
                  checked={formData.candidates} onChange={changeHandler}/>
            <div>
              <label htmlFor='candidates'> Candidates:</label>
              <p>Get notified when candidate applies for a job.</p>
            </div>
          </div>
          
          
          <div className='flex'>
            <input type='checkbox' id='offers' name='offers' 
                  checked={formData.offers} onChange={changeHandler}/>
            <div>
              <label htmlFor='offers'> Offers:</label>
              <p>Get notified when a candidate accepts or rejects an offer.</p>
            </div>
          </div>
          
        </fieldset>

        <br/>

        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone</p>

          <input type='radio' id='pushEverything' name='pushNotification' value="Everything" onChange={changeHandler}></input>
          <label htmlFor="pushEverything">Everything</label><br/>

          <input type='radio' id='pushEmail' name='pushNotification' value="Same as Email" onChange={changeHandler}></input>
          <label htmlFor="pushEmail">Same as Email</label><br/>

          <input type='radio' id='pushNothing' name='pushNotification' value="Nothing" onChange={changeHandler}></input>
          <label htmlFor="pushNothing">Nothing</label><br/>
        </fieldset>

        <br/>

        <button 
          className='bg-blue-500 text-white font-bold rounded py-2 px-4' 
          type='submit'>
          
          Save</button>
      </form>
    </div>
  );
}

export default App;
