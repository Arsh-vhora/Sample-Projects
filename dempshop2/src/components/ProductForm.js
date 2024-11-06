import './ProductForm.css'
import React, {useState} from 'react';
function ProductForm(props){

    /*const [fullProductInput, setfullProductInput] = useState({
        title:'',
        date:''
    });*/

    const [newTitle,setTitle] = useState('');
    const [newDate,setDate] = useState('');
    
    function titleChangeHandler(event){
        //console.log(event.target.valuev);
        setTitle(event.target.value);
        /*let obj =  {...prevState,title:event.target.value};
        console.log(obj);
        return obj;*/
    }
    
    function dateChangeHandler(event){
         setDate(event.target.value);
         //console.log(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault();

        const ProductData = {
            title:newTitle,
            date:newDate
        }
        //console.log(ProductData);

        props.onSaveProduct(ProductData);
        setTitle('');
        setDate('');
    }
    
    return(<form onSubmit={submitHandler}>
        <div className='new-product_controls'>
            <div className='new-product_control'>
                <label>Title</label>
                <input type="text"  onChange={titleChangeHandler} value = {setTitle}/>
            </div>
            <div className='new-product_control'> 
                <label>Date</label>
                <input type='date' min='2023-01-01' max='2023-12-12' onChange={dateChangeHandler} value = {setDate}/>
            </div>
            <div className='new-product_control'>
                <button type='submit'>Add Product</button>
            </div>
         </div>
        </form>
        
    );
} 

export default ProductForm;