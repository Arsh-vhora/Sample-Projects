import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { remove,add } from '../redux/Slices/CartSlice';
import { toast } from 'react-toastify';

const Product = ({post}) => {
  const [selected,setSelected] = useState(false);
  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to cart");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed to cart");
  }
  return (
    <div className='flex flex-col items-center justify-between gap-3
        hover:scale-110 transition duration-300 ease-in shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]
        p-4 mt-10 ml-5 rounded-xl hover:shadow-[0px_20px_65px_50px_#00000024]'>
      <div>
        <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-[1.3px]'>{post.title}</p>
      </div>
      <div>
        <p className='w-40 text-gray-400 font-normal text-[11px] text-left'>{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div className='h-[180px]'>
        <img src={post.image} className='h-full w-full'></img>
      </div>
      <div className='flex justify-between gap-12 items-center w-full mt-5'>
        <div>
          <p className='text-green-600 font-bold text-md'>${post.price}</p>
        </div>
          {
            cart.some((p) => p.id == post.id) ? 
            (<button
              className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                    text-[12px] p-1 px-3 uppercase hover:text-white hover:bg-gray-700 transition duration-300 ease-in tracking-wide'
              onClick={removeFromCart}>
              Remove Item
             </button>) : 
            (<button
              className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                    text-[12px] p-1 px-3 uppercase hover:text-white hover:bg-gray-700 transition duration-300 ease-in'
              onClick={addToCart}>
              Add to Cart
             </button>)
            //selected ? <p>Remove Item</p> : <p>Add to Cart</p>
          }
      </div>
    </div>
  )
}

export default Product