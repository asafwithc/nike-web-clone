import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgURL, customerName, rating,
feedback}) => {
  return (
    <div className='flex justify-center items-center flex-col gap-4'>
        <img src={imgURL} alt="customer" className='rounded-full
        w-[120px] h-[120px]'/>
        <p className='info-text text-center max-w-sm mt-6'>{feedback}</p>
        <div className='flex gap-3 mt-3 justify-center items-center'>
            <img src={star} alt="rating" className='object-contain'/>
            <h3 className='font-montserrat text-xl text-slate-gray'>({rating})</h3>
        </div>
        <h2 className='text-3xl font-bold font-palanquin mt-1 text-center'>{customerName}</h2>
    </div>
  )
}

export default ReviewCard