import React from 'react'
import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
import Button from './Button'

const Nav = () => {
  return (
    <header className='padding-x py-8 
    absolute z-10 w-full'>
      <nav className='flex justify-between
      items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt="Logo"
          width = {130}
          height = {29} />
        </a>
        <ul className='flex justify-center items-center
        gap-16 max-lg:hidden'>
          {navLinks.map((item)=>(
            <li key={item.label}>
              <a href={item.href} className='font-monterrat leading-none text-lg text-slate-gray'>
                {item.label}
              </a>
            </li>
          )
            )}
        </ul>
        <div className='font-montserrat flex justify-center gap-4 text-xl
        items-center max-lg:hidden font-bold
       '>
          {/*<button className=''>Login</button>
          <p className='text-2xl'>|</p>
          <button>Sign up</button>*/}
          <Button label="Login" />
          <Button label="Sign up" />
        </div>
        <div className='hidden max-lg:block'>
          <img src={ hamburger } alt="Hamburger" 
          width={25}
          height={25}/>
        </div>
      </nav>
    </header>
  )
}

export default Nav