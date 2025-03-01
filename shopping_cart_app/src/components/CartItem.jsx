import React from 'react';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';

const CartItem = ({item,itemIndex}) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }
  return (
    <div className='flex flex-col items-center p-2 md:p-5 mt-2 mb-2 md:mx-5 border-b-2 border-slate-500 justify-between'>
      <div className='flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center'>
        <div className='w-[45%]'> 
          <img src={item.image} className='cover'/>
        </div>
        <div className='md:ml-10 self-start space-y-5 '>
          <h1 className='text-xl text-slate-700 font-semibold'>{item.title}</h1>
          <h1 className='text-base text-slate-700 font-medium'>{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
          <div className='flex items-center justify-between w-full'>
          <p className='font-bold text-lg text-green-600'>${item.price}</p>
          <div
          className='bg-red-200 group hover:bg-red-400 trasnsition transform duration-300 cursor-pointer rounded-full p-3 mr-3'
            onClick={removeFromCart}>
            <MdDelete/>
          </div>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default CartItem