import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'
const SuperQuality = () => {
  return (
    <div className='flex justify-between items-center
    max-lg:flex-col gap-10 w-full max-container ' id='about-us'>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg 
        font-bold'>
          We Provide You 
          <span className="text-coral-red"> Super </span> 
          <span className="text-coral-red">Quality </span>
           Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio aperiam reiciendis assumenda consequatur, id veniam voluptatibus dignissimos laborum veritatis nostrum saepe perspiciatis ullam qui, mollitia est, laudantium minus soluta repellendus!
        </p>

        <p className='mt-6 lg:max-w-lg info-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quam quibusdam perferendis maiores voluptates rerum recusandae officiis.
        </p>
      
      <div className='mt-11'>
        <Button label="Show Details" />
      </div>
      </div>
      <div className='flex flex-1 
      '>
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </div>
  )
}

export default SuperQuality