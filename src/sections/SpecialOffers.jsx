import React from 'react'
import Button from '../components/Button'
import { offer } from '../assets/images'
import { arrowRight } from '../assets/icons'

const SpecialOffers = () => {
  return (
    <section className='flex justify-end items-center max-lg:flex-col-reverse max-container gap-15'>
      <div className='flex flex-1 
      '>
        <img
          src={offer}
          alt='product detail'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div> 

      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg 
        font-bold'>
          <span className="text-coral-red"> Special </span> Offer
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>

        <p className='mt-6 lg:max-w-lg info-text'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.       
        </p>
      
      <div className='flex gap-4 mt-11'>
        <Button label="Show Details" iconURL={arrowRight}/>
        <Button label="Learn More" textColor="text-slate-gray" background="bg-white" border="border-slate-gray"/>
      </div>
      </div>
      
    </section>
  )
}

export default SpecialOffers