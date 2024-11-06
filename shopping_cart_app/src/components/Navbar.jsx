import React from 'react';
import logo from '../assets/logo.png';
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const {cart} = useSelector((state) => state)
  return (
    <div className='bg-slate-900 '>
      <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
      <NavLink to="/">
      <div className='ml-5'>
        <img src={logo} width={180} className='h-14'></img>
      </div>
      </NavLink>
        <div className='flex items-center '> 
          <NavLink to="/">
            <p className='font-medium text-slate-100 mr-5 space-x-6'>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div className='relative font-large text-slate-100 mr-5 space-x-6'>
              <FaShoppingCart className='text-2xl'/>
              {
                cart.length > 0 && 
                <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>{cart.length}</span>
              }
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default NavBar