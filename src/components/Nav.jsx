import React, { useState } from 'react'
import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
import Button from './Button'
import { RxCross2 } from "react-icons/rx";


const Nav = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  }

  return (
    <header className='padding-x py-8 
    absolute z-10 w-full'>
      <nav className='flex justify-between
      lg:items-center max-container'>
        <a href="/" className='text-4xl text-4 font-montserrat font-bold
          text-transparent bg-gradient-to-r bg-clip-text from-coral-red to-slate-400'>SHOEGATE
          {/*width = {130}
  height = {29} />*/}
        </a>
         {/* Responsive Menu */}
         <ul className={`lg:hidden flex flex-col justify-center items-center gap-24 absolute left-0 right-0 bg-white z-[-1] min-h-screen  ${click ? 'z-50' : 'hidden'}`}>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className='font-montserrat leading-none mt-20 text-4xl border-b-2 p-2 text-slate-gray hover:text-black active:bg-slate-400 active:rounded-full'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Navigation Links (for larger screens) */}
        <ul className={`lg:flex max-lg:hidden justify-center items-center gap-16 ${click ? 'hidden' : 'flex'}`}>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className='font-montserrat leading-none text-lg text-slate-gray'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        
        {/*<div className='font-montserrat flex justify-center gap-4 text-xl
        items-center max-lg:hidden font-bold
       '>
          <button className=''>Login</button>
          <p className='text-2xl'>|</p>
          <button>Sign up</button>
          <Button label="Login" />
          <Button label="Sign up" />
        </div>*/}
        <div className=' flex justify-center items-center h-12 w-12 rounded-full hover:bg-gray-400 active:bg-slate-300'>
          <div className='lg:hidden cursor-pointer' onClick={handleClick}>
            {click ? <RxCross2 size={35}/> : <img src={ click ? RxCross2 : hamburger  } alt="Hamburger" 
            width={25}
            height={25}
            className='cursor-pointer py-2'/>}
            
          </div>
        </div>
        
      </nav>
    </header>
  )
}

export default Nav