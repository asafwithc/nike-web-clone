import React, { useState } from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../components/ShoeCard'

const Hero = () => {
  const [bigShoe, setBigShoe] = useState(bigShoe1);
  return (
    <section id="home" 
    className='w-full p-2 flex
    xl:flex-row flex-col justify-center min-h-screen
    max-container gap-5'
    >
      <div className='relative xl:w-2/5 flex flex-col
      justify-center items-start w-full max-xl:padding-x
      pt-28 '>
        <p className='font-montserrat text-xl text-coral-red '>Our Summer Collection!</p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px]
        max-sm:leading-[82] font-bold '>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 '>The New Arrival</span>
          <br />
          <span className="text-coral-red xl:bg-white z-20">Nike </span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg
        leading-8 mt-6 mb-14 sm:max-w-sm'>Discover stylish nike arrivals, quality comfort, and
          innovation for your active life.
        </p>
      
      <Button className="items-start" label="Shop now" iconURL={arrowRight}/>
      <div className='flex justify-start items-start 
      flex-wrap w-full mt-20 gap-16'>
        {statistics.map((item) => (
          <div key={item.label} 
              className=''>
            <h1 className='text-4xl font-palanquin font-bold'>{item.value}</h1>
            <h1 className='font montserrat text-slate-gray'>{item.label}</h1>
          </div>
        ))}
      </div>
      </div>
      <div className='relative flex-1 flex justify-center items-center
      xl:min-h-screen bg-hero bg-primary bg-cover 
      bg-center max-xl:py-40 '>
        <img src={bigShoe} alt="shoe collection"
        width={610} 
        height={500}
        className='object-contain relative z-10 '
        />
        <div className='flex absolute -bottom-[5%] sm:gap-6 
        gap-4 max-sm:px-6'>
          {shoes.map((shoe, index)=>(
            <div key={shoe}>
              <ShoeCard 
              imgURL={shoe}
              changeBigShoeImage={(shoe)=>{
                setBigShoe(shoe)
              }}
              bigShoeImage={bigShoe}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero