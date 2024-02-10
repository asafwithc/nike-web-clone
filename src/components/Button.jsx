import React from 'react'

const Button = ({label, iconURL, textColor, background, border, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center
    gap-2 px-7 py-4 border font-montserrat text-lg
    leading-none rounded-full ${textColor ? `${background} ${border} ${textColor}` :  `bg-coral-red rounded-full text-white`} ${fullWidth && 'w-full'} whitespace-nowrap
    hover:bg-white hover:text-slate-gray`}>
        {label}
        {iconURL && <img src={iconURL} alt="arrow right icon" 
        className='ml-2 rounded-full w-5 h-5' />}
    </button>
  )
}

export default Button