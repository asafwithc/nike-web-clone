import React from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants'
import { copyrightSign } from '../assets/icons'
const Footer = () => {
  return (
    <footer className='max-container
     '>
      <div className='flex max-lg:flex-col justify-between gap-20'>
        <div>

        <img src={footerLogo} alt="footer logo" 
        width={150} height={46}/>
        <p className='max-w-sm text-white font-montserrat
        mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque accusantium exercitationem dolores explicabo voluptatem, doloribus.</p>
        <div className='flex item-center gap-5 mt-4'>
        {socialMedia.map((item)=>(
          <div className='flex justify-center items-center h-12 w-12 rounded-full bg-white'
          key={item.alt}>
            <img src={item.src} alt={item.alt} 
            width={24} height={24}
            />
          </div>
        ))}
        </div>
      </div>
      <div className='flex flex-1 justify-between lg:gap-10 gap-15 mt-6'>
        {footerLinks.map((item) => (
          <div key={item.title}>
            <h3 className='text-white text-2xl mb-4 font-montserrat
            font-medium'>
              {item.title}
            </h3>
            <ul>
            {item.links.map((link)=>(
              <li key={link.name} className='text-white-400
               font-montserrat
                hover:text-slate-gray leading-normal mt-1.5'>
                <a href={link.link}>
                  {link.name}
                </a>
              </li>
            ))}
            </ul>
            
          </div>
        ))}
        

      </div>
        </div>
      <div className='flex justify-between text-white-400 mt-12 max-sm:flex-col
      max-sm:items-center'>
            <div className='flex flex-1 justify-start items-center 
            gap-3 font-montserrat cursor-pointer'>
              <img src={copyrightSign} alt="copyright sign" 
              width={20}
              height={20}
              className='rounded-full'/>
              <p className=''>Copyright. All rights reserved.</p>
            </div>
            <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer